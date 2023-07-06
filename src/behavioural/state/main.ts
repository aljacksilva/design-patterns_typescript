import { ShoppingOrder } from './shopping-order/shopping-order';

const order = new ShoppingOrder();

order.approvePayment(); // approved
order.waitPayment(); // pendent
order.shipOrder();
order.rejectPayment(); // from here it does not change the state
order.approvePayment();
order.waitPayment();
order.approvePayment();
order.shipOrder();
