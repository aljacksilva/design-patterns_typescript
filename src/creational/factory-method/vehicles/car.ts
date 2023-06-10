import { Vehicles } from './vehicles';

export class Car implements Vehicles {
  constructor(private name: string) {}

  pickUp(curstomerName: string): void {
    console.log(`${this.name} is seeking out ${curstomerName} `);
  }

  stop(): void {
    console.log(`${this.name} stoped`);
  }
}
