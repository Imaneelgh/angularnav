import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CommandeComponent } from './commande/commande.component';
import { CartComponent } from './cart/cart.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'commande', component: CommandeComponent },
  { path: 'signup', component: SignupComponent },

  { path: 'About', component: AboutComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
