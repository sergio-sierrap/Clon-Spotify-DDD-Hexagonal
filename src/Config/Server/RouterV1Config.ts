import express, { Application } from 'express'
import { RouterContract } from './RouterContract';

export class RouterV1Config implements RouterContract {
    private readonly _router: express.Router;

    constructor() {
        this._router = express.Router();
    }

    public addRouterToServer(app: Application): void {
        app.use('/api/v1', this._router);
       /* this._router.use('/auth', authRoute);
        this._router.use('/storage', storageRoute);
        this._router.use('/tracks', trackRoute);
        this._router.use('/users', userRoute);*/
        console.log(`- Routes [V1] connection: Succesfully!`)
    }
}

    