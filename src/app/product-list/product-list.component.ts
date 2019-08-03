import { Component, OnInit } from '@angular/core';
import { Product, MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  createdProduct:Product;

  createdFlag:boolean=false;

  service:MyserviceService;
  constructor(service:MyserviceService) 
  {
    this.service=service;
  }
  ngOnInit() {
  }
  add(data:any){
    this.createdProduct=new Product(data.id,data.name,data.price,data.category);
    this.service.add(this.createdProduct);
    alert("Added Succesfully!!!");
    this.createdFlag=true;
   }
}
