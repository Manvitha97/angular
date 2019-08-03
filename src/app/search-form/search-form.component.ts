import { Component, OnInit } from '@angular/core';
import { MyserviceService, Product } from '../myservice.service';
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  service:MyserviceService;
  constructor(service:MyserviceService) { 
    this.service=service;
  }
  Products:Product[]=[];
  delete(id:string)
  {
    this.service.delete(id);
    this.Products=this.service.getProducts();
  }
  
  isUpdate:boolean=true;
  updateData()
  {
    this.isUpdate=!this.isUpdate;
  }
  update(data:any)
  {
    this.service.update(data);
    this.Products=this.service.getProducts();
  }
  
  column:string="id"; 
  order:boolean=true;

  sort(column:string)
  {    
    if(this.column==column )
    {
      this.order=!this.order;
    }
    else
    {
      this.order=true;
      this.column=column;
    }
  }
  ngOnInit() {
    this.service.fetchProducts();
    this.Products=this.service.getProducts();
  }

  
}
