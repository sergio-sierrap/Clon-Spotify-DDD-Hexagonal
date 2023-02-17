import { DotenvEnv } from "./src/Config/Env/dotenvConfig";

export class ClonSpotifyEnv {
    env?: DotenvEnv

    async start (): Promise<void> {
        const path: string = process.env.DOTENV_PATH!
        this.env = new DotenvEnv(path)
        return await this.env.config()
    }
}