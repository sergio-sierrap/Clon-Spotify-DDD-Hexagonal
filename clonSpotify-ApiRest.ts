import { RouterApiV1 } from "./src/Config/Server/routesApi_V1_Config"
import { ExpressServer } from "./src/Config/Server/expressConfig"

export class ClonSpotifyApiRest {
    server?: ExpressServer
    routes?: RouterApiV1

    async start (): Promise<void> {

        const port: string = process.env.PORT!
        const router: RouterApiV1 = new RouterApiV1
        this.server = new ExpressServer(port, router)
        return await this.server.listen()
    }

    async stop (): Promise<void> {
        return await this.server?.stop()
    }
}