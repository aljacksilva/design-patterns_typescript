import { RemoteControl } from './remote-control';

export class RemoteControlVolume extends RemoteControl {
  volumeUp(): void {
    const oldVolume = this.device.getVolume();

    this.device.setVolume(this.device.getVolume() + 10);

    console.log(
      `${this.device.getName()} has the volume ${oldVolume} now have ${this.device.getVolume()}`,
    );
  }

  volumeDown(): void {
    const oldVolume = this.device.getVolume();

    this.device.setVolume(this.device.getVolume() - 10);

    console.log(
      `${this.device.getName()} has the volume ${oldVolume} now have ${this.device.getVolume()}`,
    );
  }
}
