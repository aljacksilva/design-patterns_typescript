import { DefaultDiscount } from './shopping-cart/default_discount';
import { ECommerceShoppingCart } from './shopping-cart/ecommerce_shopping_cart';
import { NewDiscount } from './shopping-cart/new_discount';

const shoppingCart = new ECommerceShoppingCart();

shoppingCart.discount = new DefaultDiscount();
shoppingCart.discount = new NewDiscount();
shoppingCart.addProduct({ name: 'Product 1', price: 50 });
shoppingCart.addProduct({ name: 'Product 2', price: 50 });
shoppingCart.addProduct({ name: 'Product 3', price: 50 });

console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());
