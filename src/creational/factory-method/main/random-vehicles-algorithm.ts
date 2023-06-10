import { BicycleFactory } from '../factories/bicycle-factory';
import { CarFactory } from '../factories/car-factory';
import { randomNumbers } from '../utils/random-number';
import { Vehicles } from '../vehicles/vehicles';

export function randomCarAlgorithm(): Vehicles {
  const carFactory = new CarFactory();
  const bicyleFactory = new BicycleFactory();
  const car1 = carFactory.getVehicle('Hilux');
  const car2 = carFactory.getVehicle('Gol');
  const bicycle = bicyleFactory.getVehicle('Bicyle');
  const vehicles = [car1, car2, bicycle];

  return vehicles[randomNumbers(vehicles.length)];
}
