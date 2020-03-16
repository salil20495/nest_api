import { Injectable, Body } from '@nestjs/common';
import { studentmodel } from './student.model';
import {Model} from 'mongoose'
import {InjectModel} from '@nestjs/mongoose'
import { studentschema } from './student.model';

@Injectable()
export class AppService {
  constructor(@InjectModel('studentmodel') private readonly student:Model<studentmodel>){}
  getHello(): string {
    return 'Hello World!';
  }
  ///fetch all the details from database
  async getstudent(){
    const details=await this.student.find().exec();
    return details.map(values=>({
      name:values.name,
      rollno:values.rollno,
      section: values.section,
    }))
  }

  //fetch single record from database
  // async getone(name:string){
  //   const getdata=await this.student(name)[0];
  //   return {...getdata}
  //   return getdata

  // }

  ///insert a new entry into database
  async addstudent(name:string,rollno:string,section:number){
  const add_student=new this.student(name,rollno,section);
    await add_student.save();
  }


  //update exsiting record
  async update(name){
    const student_data=await this.student.updateOne({rollno:name.rollno},name)
  }


  ///delete records
  async delete(name){
    const delete_data=await this.student.deleteOne({name:name})
  }
}
