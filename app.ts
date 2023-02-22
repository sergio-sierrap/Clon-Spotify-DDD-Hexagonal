import { DatabaseContract } from 'Config/Database/DatabaseContract';
import { EnvContract } from 'Config/Env/EnvContract';
import { ServerContract } from 'Config/Server/ServerContract';

export class App {
    private _env: EnvContract;
    private _database: DatabaseContract;
    private _serverHttp: ServerContract;

    constructor(env: EnvContract, database: DatabaseContract, serverHttp: ServerContract) {
        this._env = env
        this._database = database
        this._serverHttp = serverHttp
    }

    async start () {
        //await this._env.config(), 
        await this._database.connect(), 
        await this._serverHttp.listen()
    }
}
