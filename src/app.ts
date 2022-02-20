
import { create } from "domain";
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
    router.get('/login', async ctx => {
        // 1. [FIND] - that the name on the request (ctx.params.name) and look in the 
        // database for someone by name

        // 2. [AUTHENTICATE] - once that entry is found confirm that the password in the 
        // request (ctx.params.password) matches the password in the entry

        // 3. [RETURN] - if it does assign that entry to the response ctx.body

        
        let user = await userRepository.findOne(ctx.params.id);
        ctx.body = {
            content: 'user',
            user: user
        };
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

