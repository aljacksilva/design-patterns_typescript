import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();

deliveryContext(factory, 'Jack', '20A', 'Brooklyn', 'NYC');
deliveryContext(factory, 'Helen', '20A', 'Brooklyn', 'NYC');
deliveryContext(factory, 'Luke', '2', 'Groove', 'LA');
deliveryContext(factory, 'Peter', '50A', 'Brooklyn', 'NYC');

console.log();
console.log(factory.getLocations());
