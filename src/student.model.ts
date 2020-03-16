import * as mongoose from 'mongoose';

export const studentschema=new mongoose.Schema({
    name: {type:String,required:true},
    rollno: {type:String,required:true},
    section : {type:String,required:true}
});

export interface studentmodel extends mongoose.Document {
    name: string;
    rollno: string;
    section: number;
  }