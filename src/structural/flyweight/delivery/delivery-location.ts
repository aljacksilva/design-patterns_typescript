import { DeliveryFlyweight } from './delivery-flyweight';
import { DeliveryLocationData } from './delivery-types';

export class DeliveryLocation implements DeliveryFlyweight {
  constructor(private readonly intrincState: DeliveryLocationData) {}

  deliver(name: string, number: string): void {
    console.log('Delivery for %s', name);
    console.log('In', this.intrincState.city, this.intrincState.street);
    console.log('Number:', number);
  }
}
