import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  http:HttpClient;
  employees:Employee[]=[];

  constructor(http:HttpClient) {
    this.http=http;
   }
fetched:boolean=false;
fetchEmployees()
{
  this.http.get('./assets/employees.json')
  .subscribe(
    data=>
    {
      if(!this.fetched){
        this.convert(data);
        this.fetched=true;
      }
    }
  );
}
getEmployees():Employee[]{
return this.employees;
}
convert(data:any)
{
  for(let o of data ){
    let e=new Employee(o.id,o.name,o.dateOfBirth,o.gender,o.sal);
    this.employees.push(e);
  }
}
delete(id:number)
{
  let foundIndex:number=-1;
  for(let i=0;i<this.employees.length;i++)
  {
    let e=this.employees[i];
    if(id==e.id)
    {
      foundIndex=i;
      break;
    }
  }
  this.employees.splice(foundIndex,1);
}
add(e:Employee)
{
  this.employees.push(e)
}
}
export class Employee{
  id:number;
  name:string;
  dateOfBirth:string;
  gender:string;
  sal:number;
  constructor(id:number,name:string,dateOfBirth:string, gender:string,sal:number)
  {
    this.id=id;
    this.name=name;
    this.dateOfBirth=dateOfBirth;
    this.gender=gender;
    this.sal=sal;

  }

}