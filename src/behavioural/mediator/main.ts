import { Buyer } from './buyer';
import { Mediator } from './mediator';
import { Seller } from './seller';

const mediator = new Mediator();

const seller1 = new Seller();
seller1.addProduct({ id: '1', name: 'Short', price: 29.9 });
seller1.addProduct({ id: '2', name: 'Pen', price: 2.9 });

const seller2 = new Seller();
seller2.addProduct({ id: '3', name: 'Car', price: 50000 });
seller2.addProduct({ id: '4', name: 'Glasses', price: 757.8 });

mediator.addSeller(seller1, seller2);

const buyer = new Buyer(mediator);
buyer.viewProducts();
buyer.buy('2');
buyer.buy('3');
buyer.viewProducts();
