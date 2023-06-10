import { Car } from '../vehicles/car';
import { Vehicles } from '../vehicles/vehicles';
import { VehiclesFactory } from './vehicle-factory';

export class CarFactory extends VehiclesFactory {
  getVehicle(vehicleName: string): Vehicles {
    return new Car(vehicleName);
  }
}
