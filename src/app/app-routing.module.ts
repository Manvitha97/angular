import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchFormComponent } from './search-form/search-form.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
{
  path:'app-search-form' ,
  component : SearchFormComponent
},
{
  path:'app-product-list', 
  component: ProductListComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
