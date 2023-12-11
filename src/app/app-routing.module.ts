import { NgModule, createComponent } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { StructuralDirctivesComponent } from './structural-dirctives/structural-dirctives.component';
import { MarksComponent } from './marks/marks.component';
import { PipesComponent } from './pipes/pipes.component';
import { EventComponent } from './event/event.component';
import { CarsComponent } from './cars/cars.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { AccountComponent } from './account/account.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { FliplortComponent } from './fliplort/fliplort.component';
import { GalaryComponent } from './galary/galary.component';
import { BankComponent } from './bank/bank.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { AuthenticationGuard } from './authentication.guard';
import { NotifyGuard } from './notify.guard';
const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'dashboard', canActivate:[AuthenticationGuard], component:DashboardComponent,children:[
        {path:'structaldirectives', component:StructuralDirctivesComponent},
        {path:'marks',component:MarksComponent},
        {path:'pipes',component:PipesComponent},
        {path:'events',component:EventComponent},
        {path:'cars',component:CarsComponent},
        {path:'products',component:ProductsComponent},
        {path:'users',component:UsersComponent},
        {path:'account',component:AccountComponent},
        {path:'vehicles',component:VehicleComponent},
        {path:'flipkart',component:FliplortComponent},
        {path:'galary',component:GalaryComponent},
        {path:'create',component:CreateUserComponent},
        {path:'bank',component:BankComponent},
        {path:'userinfo',component:UserinfoComponent},
        {path:'user-form', canDeactivate:[NotifyGuard], component:UserFormComponent}
        
    ]},
     {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
