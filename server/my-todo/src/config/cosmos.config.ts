import { MongooseModuleOptions } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

export const cosmosDbConfig: MongooseModuleOptions = {
    uri: process.env.DB_URI,
    dbName: process.env.DB_NAME,
};
