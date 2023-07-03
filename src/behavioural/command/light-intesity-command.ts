import { SmartHouseCommand } from './command';
import { SmartHouseLight } from './smart-house-light';

export class lightIntesityCommand implements SmartHouseCommand {
  constructor(private readonly Light: SmartHouseLight) {}

  execute(): void {
    const intesity = this.Light.increaseInsensity();

    console.log(`Intesity of ${this.Light.name} is  ${intesity}`);
  }

  undo(): void {
    const intesity = this.Light.decreaseInsensity();

    console.log(`Intesity of ${this.Light.name} is  ${intesity}`);
  }
}
