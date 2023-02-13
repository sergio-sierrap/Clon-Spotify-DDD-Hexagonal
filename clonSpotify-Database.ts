import { MongoDatabase } from "./src/Config/Database/mongodbConfig"

export class ClonSpotifyDatabase {
    database?: MongoDatabase

    async start (): Promise<void> {
        const mongodb_uri: string = process.env.MONGODB_URI!
        this.database = new MongoDatabase(mongodb_uri)
        return await this.database.connect()
    }

    async stop (): Promise<void> {
        return await this.database?.disconnect()
    }
}