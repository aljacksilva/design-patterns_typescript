import { Bicycle } from '../vehicles/bicycle';
import { Vehicles } from '../vehicles/vehicles';
import { VehiclesFactory } from './vehicle-factory';

export class BicycleFactory extends VehiclesFactory {
  getVehicle(vehicleName: string): Vehicles {
    return new Bicycle(vehicleName);
  }
}
