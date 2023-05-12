import { Component } from '@angular/core';


interface CartItem {
  title: string;
  price: number;
  image: string;
  author?: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: CartItem[] = [
    { title: 'Livre 1', price: 10.99, image: 'assets/img1.jpg' },
    { title: 'Livre 2', price: 14.99, image: 'assets/IMG2.jpg' },
    { title: 'Livre 3', price: 19.99, image: 'assets/im3.jpg' }
  ];

  removeItem(item: { title: string; price: number; image: string; }) {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
}

  getTotal() {
    return this.cartItems.reduce((acc, item) => acc + item.price, 0);
  }

  checkout() {
  }

  showCheckout = false;
}
