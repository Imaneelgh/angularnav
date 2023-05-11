import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CommandeComponent } from './commande/commande.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { ChartsComponent } from './charts/charts.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
     
    HomeComponent,
    CartComponent,
    CommandeComponent,
    AboutComponent,
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

