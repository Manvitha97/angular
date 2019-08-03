import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  http:HttpClient;
  Products:Product[]=[];

  constructor(http:HttpClient) { 
    this.http=http;
    this.fetchProducts();
  }
  fetched:boolean=false;

  fetchProducts()
  {
    this.http.get('./assets/Products.json')
    .subscribe
    (
      data=>
      {
        if(!this.fetched)
        {
          this.convert(data);
          this.fetched=true;
        }
      }
    );
}
getProducts():Product[]
  {
    return this.Products;
  }
  convert(data:any)
  {
    for(let o of data)
    {
      let e=new Product(o.id,o.name,o.price,o.category);
      this.Products.push(e);
    }
  }
  delete(id:string)
  {
    let foundIndex:number=-1;
    for(let i=0;i<this.Products.length;i++)
    {
      let e=this.Products[i];
      if(id==e.id)
      {
        foundIndex=i;
        break;
      }
    }
    this.Products.splice(foundIndex,1);
  }
  add(e:Product){
    this.Products.push(e);
    
  
}
update(data:any)
  {
    let id=data.id;
    for(let i=0;i<this.Products.length;i++)
    {
      if(id === this.Products[i].id)
      {
        this.Products[i].price=data.price;
        this.Products[i].category=data.category;
        break;
      }
    }
  }
}
export class Product{
  id:string;
  name:string;
  price:number;
  category:string;
    constructor(id:string,name:string,price:number,category:string)
    {
      this.id=id;
      this.name=name;
      this.price=price;
      this.category=category;
      
    }
}
