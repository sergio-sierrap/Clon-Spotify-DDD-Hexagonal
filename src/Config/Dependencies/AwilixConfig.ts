import { createContainer, InjectionMode, asClass, asValue, asFunction } from 'awilix';
import { MongoDatabase } from '../../Config/Database/mongodbConfig';
import { ClonSpotifyApiRest } from '../../../clonSpotify-ApiRest';
import { ClonSpotifyDatabase } from '../../../clonSpotify-Database';
import { ClonSpotifyEnv } from '../../../clonSpotify-Env';
//import { DatabaseContract } from '../Database/DatabaseContract'; // Importar la interface que define la base de datos

export const container = createContainer({
  injectionMode: InjectionMode.CLASSIC,
});

container.register({
  apiRest: asClass(ClonSpotifyApiRest).singleton(),
  env: asClass(ClonSpotifyEnv).singleton(),
  database: asClass(ClonSpotifyDatabase).singleton(),
  databaseConnectionString: asValue(process.env.MONGODB_URI!),
  // Registra MongoDatabase como una fábrica
  mongoDatabase: asFunction(() => new MongoDatabase(container.resolve<string>('databaseConnectionString'))).singleton(),
  //mongo_database: asValue(new MongoDatabase(process.env.MONGODB_URI!)),
});
