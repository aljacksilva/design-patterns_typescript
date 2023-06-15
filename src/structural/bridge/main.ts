import { Radio } from './device/radio';
import { Tv } from './device/tv';
import { RemoteControl } from './remote-control/remote-control';
import { RemoteControlVolume } from './remote-control/remote-control-with-volume';

export function ClientCode(
  abstraction: RemoteControl | RemoteControlVolume,
): void {
  abstraction.togglePower(); // true

  // Type Guard
  if (!('volumeUp' in abstraction)) return;

  abstraction.volumeUp(); // 20
  abstraction.volumeUp(); // 30
  abstraction.volumeDown(); // 20
}

const tv = new Tv();
const radio = new Radio();
const radioRemoteControl = new RemoteControl(radio);

ClientCode(radioRemoteControl);

const tvRemoteControl = new RemoteControlVolume(tv);

ClientCode(tvRemoteControl);
