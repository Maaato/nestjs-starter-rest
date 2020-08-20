import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { Connection } from 'typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/entity/user';
import {UsersModule} from './users/users.module'

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: `${process.env.DBHOST}`,
      port: 3306,
      username: `${process.env.DBUSER}`,
      password: `${process.env.DBPASSWORD}`,
      database: `${process.env.DBNAME}`,
      entities: [User],
      synchronize: true,
    }), UsersModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  constructor(private connection: Connection) {}
}
