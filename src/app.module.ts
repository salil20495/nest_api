import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose'
import {studentschema} from './student.model'
import {studentmodel} from './student.model'
@Module({
  imports: [MongooseModule.forRoot("mongodb://localhost:27017/mydb"),
            MongooseModule.forFeature([{
              name:"studentmodel",
              schema:studentschema,
              collection:"data"
            }])
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
