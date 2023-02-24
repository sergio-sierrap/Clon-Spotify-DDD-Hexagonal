import * as awilix from 'awilix'
import { DotenvConfig } from '../Env/dotenvConfig';
import { MongoConfig } from '../Database/mongoConfig';
import { ExpressConfig } from '../Server/ExpressConfig';
import { RouterV1Config } from '../Server/RouterV1Config';
import { App } from '../../../app';
import { CreateUserUseCase } from '../../User/Application/Create/CreateUserUseCase';
//import { CreateUserController } from '../../User/Infraestructure/ServerHttp/Controllers/Create/CreateUserController';

export const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.CLASSIC});

container.register({
    app: awilix.asClass(App).singleton(),
    env: awilix.asClass(DotenvConfig),
    database: awilix.asClass(MongoConfig),
    router: awilix.asClass(RouterV1Config),
    serverHttp: awilix.asClass(ExpressConfig),

    createUserUseCase: awilix.asClass(CreateUserUseCase),
    //createUserController: awilix.asClass(CreateUserController)


})
