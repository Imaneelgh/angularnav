import { Component, Input } from '@angular/core';
import { Book } from '../cart/book';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() cartItems: Book[] = [];


  constructor() { }
  redirectToCart() {
   
  }
  
}
