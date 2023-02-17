import mongoose, {ConnectOptions} from 'mongoose'
import { DatabaseContract } from './DatabaseContract'

export class MongoDatabase implements DatabaseContract {
    private readonly _mongodb_uri: string
    private readonly _mongodb_config_options: ConnectOptions

    constructor (mongodb_uri: string) {
        this._mongodb_uri = mongodb_uri
        this._mongodb_config_options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        } as ConnectOptions
    }

    async connect (): Promise<void> {
        return await new Promise((resolve, reject) => {
            try{
                mongoose.set("strictQuery", false);
                mongoose.connect(this._mongodb_uri, this._mongodb_config_options)
                mongoose.connection.on('connected', ()=>{
                    console.log(`- Database connection: Succesfully!`)
                    resolve();
                })
            } catch (error) {
                console.log(`- Database connection: Error, something went wrong!`)
                console.log(error)
                reject(error)
            }
        })
    }

    async disconnect (): Promise<void> {
        return await new Promise((resolve, reject) => {
            try {
                mongoose.connection.close(() => {
                    console.log(`- Database connection: Closed successfully!`)
                    resolve();
                })
            } catch (error) {
                console.log(`- Database connection: Error, couldn't close the connection!`)
                console.log(error)
                reject(error);
            }
        })
    }
}
