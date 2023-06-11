import { EnterpriseCreateVehicleCustomerFactory } from './factories/enterprise-customer-vehicle-factory';
import { IndividualCreateVehicleCustomerFactory } from './factories/individual-customer-vehicle-factory';

const entepriseFactory = new EnterpriseCreateVehicleCustomerFactory();
const individualFactory = new IndividualCreateVehicleCustomerFactory();

const car1 = entepriseFactory.createVechile('Hilux', 'John');
const car2 = individualFactory.createVechile('Ferrari', 'Luke');

car1.pickUp();
car2.pickUp();
