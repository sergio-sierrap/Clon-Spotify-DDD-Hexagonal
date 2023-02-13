import * as dotenv from 'dotenv'
import { ClonSpotifyBackendApp } from './clonSpotify-BackendApp'
import { ClonSpotifyDatabase } from './clonSpotify-Database'

try {
    dotenv.config()
    new ClonSpotifyDatabase().start()
    new ClonSpotifyBackendApp().start()
} catch (error) {
    console.log(error)
}