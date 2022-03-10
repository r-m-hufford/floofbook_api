
import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./models/User";


const Koa = require('koa');
const KoaRouter = require('koa-router');
const json = require('koa-json');
const bp = require('koa-bodyparser')
require('dotenv').config();

createConnection().then(connection => {
    const userRepository = connection.getRepository(User);

    const port = process.env.PORT;
    const app = new Koa();
    const router = new KoaRouter();
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

    router.get('/users', async (ctx) => {
        let users = await userRepository.find();
        ctx.body = {
            content: 'users',
            users: users
        };
    })

    // get user by id
    router.get('/user/:id', async (ctx) => {
        let user = await userRepository.findOne(ctx.params.id);
        ctx.body = {
            content: 'user',
            user: user
        };
    })
    
    app.use(router.routes()).use(router.allowedMethods());
    app.listen(port, () => console.log(`Server started on port ${port}`));
    }
)

