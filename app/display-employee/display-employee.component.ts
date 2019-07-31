import { Component, OnInit } from '@angular/core';
import { Employee, MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  service:MyserviceService;


  constructor(service:MyserviceService) {
    this.service=service;
   
   }
   employees:Employee[]=[]
   delete(id:number)
   {
     this.service.delete(id);
     this.employees=this.service.getEmployees();
    }
   

  ngOnInit() {
    this.service.fetchEmployees();
    this.employees=this.service.getEmployees();
  }
}
