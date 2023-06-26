import { DeliveryFlyweight } from './delivery-flyweight';
import { DeliveryLocation } from './delivery-location';
import {
  DeliveryLocationData,
  DeliveryLocationDictionary,
} from './delivery-types';

export class DeliveryFactory {
  private location: DeliveryLocationDictionary = {};

  private createId(data: DeliveryLocationData): string {
    return Object.values(data)
      .map((item) => item.replace(/\s+/, '').toLocaleLowerCase())
      .join('_');
  }

  makeLocation(intrincState: DeliveryLocationData): DeliveryFlyweight {
    const key = this.createId(intrincState);

    if (key in this.location) return this.location[key];

    this.location[key] = new DeliveryLocation(intrincState);

    return this.location[key];
  }

  getLocations(): DeliveryLocationDictionary {
    return this.location;
  }
}
