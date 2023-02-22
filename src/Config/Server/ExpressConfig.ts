import express from 'express'
import cors from 'cors'
import http from 'http'
import { ServerContract } from './ServerContract'
import { RouterContract } from './RouterContract'

export class ExpressConfig implements ServerContract {
    private readonly _port: string
    private readonly _app: express.Express
    private readonly _routes: RouterContract
    private _httpServer?: http.Server

    constructor (port: string = process.env.PORT!, router: RouterContract) {
        this._port = port;
        this._app = express();
        this._app.use(cors());
        this._app.use(express.json());
        this._app.use(express.urlencoded({extended:false}));
        this._routes = router;
        this._routes.addRouterToServer(this._app)
    }

    async listen (): Promise<void> {
        return await new Promise(resolve => {
            this._httpServer = this._app.listen(this._port, () => {
                console.log(
                    `- Server connection: Succesfully! Running at http://localhost:${this._port}`
                ),
                resolve()
            })
        })
    }

    async stop(): Promise<void> {
        return await new Promise((resolve, reject) => {
            if (this._httpServer != null) {
                this._httpServer?.close(error => {
                    if (error != null) {
                        return reject(error)
                    }
                    return resolve()
                })
            }
            return resolve()
        })
    }
}