import ShoppingCart from './ShoppingCart.js';
import { assert } from 'chai';

describe('add number of products to the cart and get total price', () => {
  it('should be equal to 13.89', () => {
    const shoppingCart = new ShoppingCart();
    shoppingCart.addProduct('Apple', 4.95, 2);
    shoppingCart.addProduct('Orange', 3.99);
    assert.equal(shoppingCart.totalPrice, 13.89);
  });
});

describe('add number of products to the cart and remove some then get total price', () => {
  it('should be equal to 9.9', () => {
    const shoppingCart = new ShoppingCart();
    shoppingCart.addProduct('Apple', 4.95, 3);
    shoppingCart.removeProduct('Apple', 4.95);

    assert.equal(shoppingCart.totalPrice, 9.9);
  });
});
