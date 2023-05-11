import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: any[] = []; // Ajouter la propriété cartItems ici

  constructor() { }

  getTotalPrice(): number {
    // Code pour calculer le prix total du panier
    return 0;
  }

  checkout(): void {
    window.location.href = '/commande';
  }
}
