import { Controller, Get,Post,Put,Delete,Param, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('students')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('details')
  getstudent(){
    return this.appService.getstudent();
  }
  // @Get('fetchone')
  // getone(@Body() name){
  //   var fetch= this.appService.getone(name)
  //   if(fetch){
  //     return fetch
  //   }
  //   else{
  //     return console.error("error");
      
  //   }
  // }
  @Post('add')
  addstudent(@Body() name,rollno,section){
    var store=this.appService.addstudent(name,rollno,section);
    if(store){
      console.log("student added successfully");
    }
    else{
      console.log("error");
    }
  }
  @Put('update')
  update(@Body() name){
    var upd=this.appService.update(name)
    if(upd){
      console.log("successfully");
    }
    else{
      console.log("error");
    }
  }
  @Delete('delete/:name')
  delete(@Param('name') name){
    this.appService.delete('name')
  }
}
