import dotenv, { DotenvConfigOptions } from 'dotenv'

export class DotenvEnv {
    private readonly _dotenv_path: string
    private readonly _dotenv_config: DotenvConfigOptions

    constructor (path: string) {
        this._dotenv_path = path
        this._dotenv_config = {
            path: this._dotenv_path,
            encoding: "latin1",
            debug: true
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