import Product from './Product.js';
import { addPrice, subPrice } from './utils.js';

export default class ShoppingCart {
  constructor() {
    this.totalPrice = 0;
    this.products = [];
  }

  addProduct(name, price, qty = 1) {
    const product = new Product(name, price);
    this.products.push(product);
    product.qty += qty;
    this.totalPrice = this.products
      .reduce((acc, item) => acc + item.price * item.qty, 0)
      .toFixed(2);
  }

  removeProduct(name, price, qty = 1) {
    const productIndex = this.products.findIndex((item) => item.name === name);

    if (productIndex !== -1) {
      this.totalPrice = subPrice(this.totalPrice, price * qty);
      this.products.splice(productIndex, 1);

      console.log('success');
    } else {
      console.log('error');
    }
  }
}
