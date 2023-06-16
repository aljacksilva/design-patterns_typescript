import { ProductProtocol } from './product-protocol';

export class TShirt implements ProductProtocol {
  private name = 'Tshirt';
  private price = 49.4;

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }
}
