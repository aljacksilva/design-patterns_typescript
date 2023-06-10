import { CarFactory } from './factories/car-factory';
import { randomCarAlgorithm } from './main/random-vehicles-algorithm';
import { randomNumbers } from './utils/random-number';

const carFactory = new CarFactory();
const customerNames = ['Ana', 'John', 'Peter', 'Helena'];

for (let i = 0; i < 10; i++) {
  const vehicles = randomCarAlgorithm();
  const name = customerNames[randomNumbers(customerNames.length)];
  const newCar = carFactory.pickUp(name, `NEW CAR ${randomNumbers(100)}`);

  vehicles.pickUp(name);
  vehicles.stop();
  newCar.stop();

  console.log('----');
}
