import { ProductDecorator } from './product-decorator';

export class ProducCustomizationDecorator extends ProductDecorator {
  getName(): string {
    return this.product.getName() + ' (Custom)';
  }

  getPrice(): number {
    return this.product.getPrice() + 20;
  }
}
