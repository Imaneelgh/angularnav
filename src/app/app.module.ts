import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CommandeComponent } from './commande/commande.component';
import { SignupComponent } from './signup/signup.component';
import { ChartsComponent } from './charts/charts.component';

import { AboutModuleComponent } from './about-module/about-module.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
     AboutModuleComponent,
    HomeComponent,
    CartComponent,
    CommandeComponent,
    SignupComponent,
    ChartsComponent,
    
 
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

