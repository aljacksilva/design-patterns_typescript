import { TaxiVisitorProtocol } from './tax-visitor-protocol';
import { VisitableProduct } from './visitable-product';

export class Food extends VisitableProduct {
  constructor(protected price: number) {
    super('Food', price);
  }

  getPriceWithTaxes(visitor: TaxiVisitorProtocol): number {
    return visitor.calculateTaxesForFood(this);
  }
}
