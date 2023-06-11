import { Customer } from '../customer/customer';
import { VehicleProtocol } from '../vehicle/vehicle-protocol';

export interface CreateVehicleCustomerFactory {
  createCustomer(customerName: string): Customer;
  createVechile(vehicleName: string, customerName: string): VehicleProtocol;
}
