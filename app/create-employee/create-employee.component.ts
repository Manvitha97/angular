import { Component, OnInit } from '@angular/core';
import { Employee, MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  createdEmployee:Employee;
  createdFlag:boolean=false;
  service: MyserviceService;
 
  constructor(service: MyserviceService) {
    this.service=service;
   
   }
  ngOnInit() {
  }
  add(data:any)
  {
    this.createdEmployee=new Employee(data.id,data.name,data.dateOfBirth,data.gender,data.sal);
    this.service.add(this.createdEmployee);
    this.createdFlag=true;
  }

}
