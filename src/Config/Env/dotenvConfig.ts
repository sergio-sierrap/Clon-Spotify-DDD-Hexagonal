import dotenv, { DotenvConfigOptions } from 'dotenv'
import { EnvContract } from './EnvContract'

export class DotenvConfig implements EnvContract {
    private readonly _dotenv_config: DotenvConfigOptions;

    constructor () {
        this._dotenv_config = {
            encoding: "latin1",
            debug: false
        } as DotenvConfigOptions
    }

    async config (): Promise<void> {
        return await new Promise((resolve, reject) => {
            try {
                dotenv.config(this._dotenv_config);
                console.log(`- Variables .env connection: Succesfully!`);
                resolve();
            } catch (error) {
                console.log(`- Variables .env connection: Something went wrong!`);
                console.log(error);
                reject(error);
            }
        })
    }
} 