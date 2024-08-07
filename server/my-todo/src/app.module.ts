import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodosModule } from './todos/todos.module';
import { cosmosDbConfig } from './config/cosmos.config';

@Module({
  imports: [
    MongooseModule.forRoot(cosmosDbConfig.uri, { dbName: cosmosDbConfig.dbName }),
    TodosModule,
  ],
})
export class AppModule {}



// import { Module } from '@nestjs/common';
// import { TodoModule } from './todos/todo.module';
// import { SequelizeModule } from '@nestjs/sequelize';
// import { ConfigModule } from '@nestjs/config';
// import { SequelizeConfigService } from './config/sequelizeConfig.service';
// import { databaseConfig } from './config/configuration';


// @Module({
//   imports: [
//     SequelizeModule.forRootAsync({
//       imports: [ConfigModule],
//       useClass: SequelizeConfigService
//     }),
//     ConfigModule.forRoot({
//       load:[databaseConfig],
//     }),
//     TodoModule],
// })
// export class AppModule {}
