
import { create } from "domain";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./models/User";

const Koa = require('koa');
const KoaRouter = require('koa-router');
const json = require('koa-json');
const bp = require('koa-bodyparser')


createConnection().then(connection => {
    const userRepository = connection.getRepository(User);

    const port = 3000
    const app = new Koa();
    const router = new KoaRouter();
    app.use(json());
    app.use(bp());
    
    //login/out endpoints
    router.get('/login', ctx => (ctx.body = 'hello floof'));

    //user endpoints
    // router.get('/user', ctx => (ctx.body = users));
    // router.get('/user/:id', ctx => (ctx.body = users[ctx.params.id]));
    // router.post('user/:id', )
    
    app.use(router.routes()).use(router.allowedMethods());
    app.listen(port, () => console.log(`Server started on port ${port}`));
    }
)

