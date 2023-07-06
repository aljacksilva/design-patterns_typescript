import { ShoppingOrder } from './shopping-order';
import { ShoppingOrderState } from './shopping-order-state';

export class OrderRejected implements ShoppingOrderState {
  private name = 'OrderRejected';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    console.log('No can aprov the payment because the order was rejecteed.');
  }

  rejectPayment(): void {
    console.log('Already is rejected.');
  }

  waitPayment(): void {
    console.log('No can move for pendent because the order was rejected.');
  }

  shipOrder(): void {
    console.log('No can sent the order with rejected payment. ');
  }
}
