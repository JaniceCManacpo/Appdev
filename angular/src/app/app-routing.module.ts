import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' }, // Redirect to 'employee' when the path is empty
  { path: 'employee', component: EmployeeComponent, title: 'Employee' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
