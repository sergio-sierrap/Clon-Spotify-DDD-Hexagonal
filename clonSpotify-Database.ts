import { DatabaseContract } from "Config/Database/DatabaseContract"
//import { MongoDatabase } from "./src/Config/Database/mongodbConfig"
import * as awilix from 'awilix';

export class ClonSpotifyDatabase {
    private _database?: DatabaseContract;

    constructor(mongoDatabase: DatabaseContract) {
        this._database = mongoDatabase
    }

    async start (): Promise<void> {
        //const mongodb_uri: string = process.env.MONGODB_URI!
        //this._database = new MongoDatabase(mongodb_uri)
        return await this._database?.connect()
    }

    async stop (): Promise<void> {
        return await this._database?.disconnect()
    }
}