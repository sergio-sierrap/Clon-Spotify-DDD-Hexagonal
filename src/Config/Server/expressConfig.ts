import express from 'express'
import http from 'http'

export class Server {
    private readonly _port: string
    private readonly _app: express.Express
    private _httpServer?: http.Server

    constructor (port: string) {
        this._port = port
        this._app = express()
        this._app.use(express.json())
        this._app.use(express.urlencoded({extended:false}))

    }

    async listen (): Promise<void> {
        return await new Promise(resolve => {
            this._httpServer = this._app.listen(this._port, () => {
                console.log(
                    `Clon-Spotify Backend App is running at http://localhost:${this._port}`
                ),
                console.log('   press CTRL-C to stop\n')
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