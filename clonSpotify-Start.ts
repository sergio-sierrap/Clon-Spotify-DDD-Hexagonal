import * as dotenv from 'dotenv'
import { ClonSpotifyBackendApp } from './clonSpotify-BackendApp'

try {
    dotenv.config()
    
    new ClonSpotifyBackendApp().start()

} catch (error) {
    console.log(error)
}