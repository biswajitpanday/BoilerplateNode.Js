import { DataSource } from "typeorm";
import { appConfig } from "../common";
import { WeatherForecast } from './entities/weatherForecast.entity';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: appConfig.dbHost,
    port: Number(appConfig.dbPort),
    username: appConfig.dbUser,
    password: appConfig.dbPassword,
    database: appConfig.dbName,
    entities: [ WeatherForecast
       // __dirname + '/../**/entities/*.entity{.ts,.js}'
    ],
    synchronize: true,
    logging: true,
    subscribers: []
});