import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { NavBarComponent } from './Pages/nav-bar/nav-bar.component';
import { SideBarComponent } from './Pages/side-bar/side-bar.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { LoginComponent } from './Pages/login/login.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { DetailsComponent } from './Pages/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavBarComponent,
    SideBarComponent,
    FooterComponent,
    LoginComponent,
    HomePageComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule 


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
