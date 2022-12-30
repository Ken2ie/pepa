import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { LoginComponent } from './login/login.component';
import { EducationalComponent } from './login/educational/educational.component'; 
import { CompanyComponent } from './login/company/company.component'; 
import { IndustrialComponent } from './login/industrial/industrial.component'; 
import { EduComponent } from './dashboard/edu/edu.component';
import { InstComponent } from './dashboard/inst/inst.component';
import { CompComponent } from './dashboard/comp/comp.component';


const routes: Routes = [
  {path: '' , component:HomeComponent},
  {path: 'about' , component:AboutComponent},
  {path: 'home' , component:HomeComponent},
  {path: 'howitworks' , component:HowitworksComponent},
  {path: 'educational' , component:EducationalComponent},
  {path: 'company' , component:CompanyComponent},
  {path: 'industrial' , component:IndustrialComponent},
  {path: 'edu' , component:EduComponent},
  {path: 'inst' , component:InstComponent},
  {path: 'comp' , component:CompComponent},
  {path: 'login' , component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
