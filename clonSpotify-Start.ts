/*

import { ClonSpotifyApiRest } from './clonSpotify-ApiRest'
import { ClonSpotifyDatabase } from './clonSpotify-Database'
import { ClonSpotifyEnv } from './clonSpotify-Env'

try {
    new ClonSpotifyEnv().start()
    new ClonSpotifyDatabase().start()
    new ClonSpotifyApiRest().start()
} catch (error) {
    console.log(error)
}

*/

import { ClonSpotifyApiRest } from './clonSpotify-ApiRest';
import { ClonSpotifyDatabase } from './clonSpotify-Database';
import { ClonSpotifyEnv } from './clonSpotify-Env';
import { container } from './src/Config/Dependencies/AwilixConfig';

// Obtener las instancias de las dependencias
const apiRest = container.resolve<ClonSpotifyApiRest>('apiRest');
const env = container.resolve<ClonSpotifyEnv>('env');
const database = container.resolve<ClonSpotifyDatabase>('database');

// Usar las instancias
const startApplication = async () => {
    try {
        env.start();
        database.start();
        apiRest.start();
    } catch (error) {
        console.log(error);
    }
}
