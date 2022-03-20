
import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./models/User";


const Koa = require('koa');
const KoaRouter = require('koa-router');
const json = require('koa-json');
const bp = require('koa-bodyparser');
const cors = require('@koa/cors');
require('dotenv').config();

createConnection().then(connection => {
    const userRepository = connection.getRepository(User);

    const port = process.env.PORT;
    const app = new Koa();
    const router = new KoaRouter();

    app.use(cors());
    app.use(json());
    app.use(bp());
    
    //login/out endpoints
    router.get('/login', async (ctx) => {
        
        // 1. [FIND] - that the name on the request (ctx.params.name) and look in the 
        // database for someone by name
        let isAuthenticated: boolean;
        // find user by name
        console.log('ctx from login: ', ctx.request.body);

        let user = await User.createQueryBuilder('profiles')
          .where('name = :name', { name: ctx.request.body.name })
          .getOne();

        console.log('the user from login: ', user);

        if (user.password = ctx.request.body.password) {
          isAuthenticated = true;
        } else {
          isAuthenticated = false;
        }
        //This is way better. Figure out how to do it this way.
        //let resp = await Profile.authenticate(ctx.params.name, ctx.params.password);

        ctx.body = {
            isAuthenticated: isAuthenticated,
            user: user
        };
        console.log('return ctx from login: ', ctx.body);
    });

    // can use for a 'you might know' page/section
    router.get('/users', async (ctx) => {
        let users = await userRepository.find();
        ctx.body = {
            content: 'users',
            users: users
        };
    })

    // get user by id
    router.get('/user/:id', async (ctx) => {
        // if the user number is not the correct format return invalid id format error
        let user = await userRepository.findOne(ctx.params.id);
        if(user) {  
            ctx.body = {
                content: 'user',
                user: user
            };
        }
        if(!user){
            const err = new Error('There was a problem loading this user');
            ctx.body = {
                err: err
            }
        }
    })


    // CREATE
    router.post('/user', async (ctx) => {
        console.log('ctx from the post: ', ctx.request.body);
        if(ctx.request.body){
            const user = await userRepository.create(ctx.request.body);
            const result = await userRepository.save(user);
            ctx.body = result;
        }
        if(!ctx.request.body){
            const err = new Error('invalid request body')
            ctx.body = err;
        }
    })

    // UPDATE
    router.put('/user/:id', async (ctx) => {
        console.log('ctx from the post: ', ctx.request.body);
        const user = await userRepository.findOne(ctx.params.id);
        userRepository.merge(user, ctx.request.body);
        const result = await userRepository.save(user);
        ctx.body = result;
    })

    // DELETE
    router.delete('/user/:id', async (ctx) => {
        console.log("id from the delete route: ", ctx.params.id);
        const user = await userRepository.findOne(ctx.params.id);
        const name = user.name;
        userRepository.delete(ctx.params.id);
        ctx.body = `User id: ${ctx.params.id}. ${name} has been removed from the app.`
    })
    
    app.use(router.routes()).use(router.allowedMethods());
    app.listen(port, () => console.log(`Server started on port ${port}`));
    }
)

