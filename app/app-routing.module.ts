import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent} from './create-employee/create-employee.component';
import { DisplayEmployeeComponent} from './display-employee/display-employee.component';

const routes: Routes = [
  {
    path:'app-create-employee',
    component:CreateEmployeeComponent
  },
  {
    path:'app-display-employee',
    component:DisplayEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
