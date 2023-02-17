/* import userRoute from '../../User/Infraestructure/ServerHttp/Routes/userRoute'
import trackRoute from '../../Track/Infraestructure/ServerHttp/Routes/trackRoute'
import storageRoute from '../../Storage/Infraestructure/ServerHttp/Routes/storageRoute'
import authRoute from '../../Auth/Infraestructure/ServerHttp/Routes/AuthRoute' */
import express, { Application } from 'express'

/*
export function apiRest_V1(app: Application): void {
    const apiRest = express.Router();
    app.use('/api/v1', apiRest);
    apiRest.use('/auth', authRoute);
    apiRest.use('/storage', storageRoute);
    apiRest.use('/tracks', trackRoute);
    apiRest.use('/users', userRoute);
}
*/

export class RouterApiV1 {
    private readonly _router: express.Router;

    constructor() {
        this._router = express.Router();
    }

    public addRoutesToServer(app: Application): void {
        app.use('/api/v1', this._router);
       /* this._router.use('/auth', authRoute);
        this._router.use('/storage', storageRoute);
        this._router.use('/tracks', trackRoute);
        this._router.use('/users', userRoute);*/
        console.log(`- Routes connection: Succesfully!`)
        console.log(`- ApiREST V1 connection: Succesfully!`)
    }
}

    