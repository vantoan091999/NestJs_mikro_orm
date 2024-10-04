// src/mikro-orm.config.ts
import { defineConfig } from '@mikro-orm/mysql'; // import defineConfig từ driver MySQL
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

export default defineConfig({
  entities: ['./dist/entities'], // path to compiled entities
  entitiesTs: ['./src/entities'], // path to TypeScript entities
  dbName: 'testnestjs',
  driverOptions: {
    connection: {
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'kakashi99',
    },
  },
  debug: true, // set to false in production
  migrations: {
    path: './dist/migrations', // path to the compiled migrations
    pathTs: './src/migrations', // path to the TS migrations
  },
  metadataProvider: TsMorphMetadataProvider,
});
