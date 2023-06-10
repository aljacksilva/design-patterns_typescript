import { Vehicles } from '../vehicles/vehicles';

export abstract class VehiclesFactory {
  // Factory Method
  abstract getVehicle(vehicleName: string): Vehicles;

  pickUp(curstomerName: string, vehicleName: string): Vehicles {
    const car = this.getVehicle(vehicleName);
    car.pickUp(curstomerName);
    return car;
  }
}
