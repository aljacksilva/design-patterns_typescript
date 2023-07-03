export class SmartHouseLight {
  private isOn = false;
  private intensity = 50;

  constructor(public name: string) {}

  getPowerStatus(): string {
    return this.isOn ? 'On' : 'OFF';
  }

  on(): boolean {
    this.isOn = true;

    console.log(`${this.name} now is ${this.getPowerStatus()}`);

    return this.isOn;
  }

  off(): boolean {
    this.isOn = false;

    console.log(`${this.name} now is ${this.getPowerStatus()}`);

    return this.isOn;
  }

  increaseInsensity(): number {
    if (this.intensity >= 100) return this.intensity;

    this.intensity += 1;

    return this.intensity;
  }

  decreaseInsensity(): number {
    if (this.intensity <= 0) return this.intensity;

    this.intensity -= 1;

    return this.intensity;
  }
}
