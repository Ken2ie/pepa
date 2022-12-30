import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { SectorsComponent } from './sectors/sectors.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { LoginComponent } from './login/login.component';
import { EducationalComponent } from './login/educational/educational.component';
import { CompanyComponent } from './login/company/company.component';
import { IndustrialComponent } from './login/industrial/industrial.component';
import { EduComponent } from './dashboard/edu/edu.component';
import { InstComponent } from './dashboard/inst/inst.component';
import { CompComponent } from './dashboard/comp/comp.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from './login/educational/shared/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    HowitworksComponent,
    SectorsComponent,
    DocumentationComponent,
    LoginComponent,
    EducationalComponent,
    CompanyComponent,
    IndustrialComponent,
    EduComponent,
    InstComponent,
    CompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
