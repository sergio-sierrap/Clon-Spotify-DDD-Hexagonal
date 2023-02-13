import { ExpressServer } from "./src/Config/Server/expressConfig"

export class ClonSpotifyBackendApp {
    server?: ExpressServer

    async start (): Promise<void> {

        const port: string = process.env.PORT!
        this.server = new ExpressServer(port)
        return await this.server.listen()
    }

    async stop (): Promise<void> {
        return await this.server?.stop()
    }
}