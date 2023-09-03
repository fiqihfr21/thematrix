import { Global, Module } from '@nestjs/common';
import { User } from './models/auth';
import { ObjectionModule } from '@willsoto/nestjs-objection';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Global()
@Module({
  imports: [
    ObjectionModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory() {
        return {
          config: {
            client: 'postgresql',
            connection: {
              host: process.env.DB_HOST,
              port: process.env.DB_PORT,
              user: process.env.DB_USERNAME,
              password: process.env.DB_PASSWORD,
              database: process.env.DB_DATABASE,
            },
            migrations: {
              directory: './src/database/migrations',
            },
            debug: false,
          },
        };
      },
    }),
    ObjectionModule.forFeature([User]),
  ],
  //providers: [...providers],
  //exports: [...providers],
  exports: [ObjectionModule],
})
export class DatabaseModule {}
