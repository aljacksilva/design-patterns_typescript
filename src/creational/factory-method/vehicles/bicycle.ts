import { Vehicles } from './vehicles';

export class Bicycle implements Vehicles {
  constructor(private name: string) {}

  pickUp(curstomerName: string): void {
    console.log(`${this.name} is seeking out E${curstomerName} `);
  }

  stop(): void {
    console.log(`${this.name} stoped`);
  }
}
