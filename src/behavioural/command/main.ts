import { lightIntesityCommand } from './light-intesity-command';
import { LightPowerCommand } from './light-power-command';
import { SmartHouseApp } from './smart-house-app';
import { SmartHouseLight } from './smart-house-light';

// Receiver
const bedroomLight = new SmartHouseLight('Light bedroom');
const bathroomLight = new SmartHouseLight('Light bathroom');
// Command
const bedroomLightPowerCommand = new LightPowerCommand(bedroomLight);
const bathroomLightPowerCommand = new LightPowerCommand(bathroomLight);
const bedrommIntesityCommand = new lightIntesityCommand(bedroomLight);
// Controler - invoker
const smartHouseApp = new SmartHouseApp();

smartHouseApp.addCommand('btn-1', bedroomLightPowerCommand);
smartHouseApp.addCommand('btn-2', bathroomLightPowerCommand);
smartHouseApp.addCommand('btn-3', bedrommIntesityCommand);

smartHouseApp.executeCommand('btn-1');
smartHouseApp.undoCommand('btn-1');

smartHouseApp.executeCommand('btn-2');
smartHouseApp.undoCommand('btn-2');

for (let i = 0; i < 5; i++) {
  smartHouseApp.executeCommand('btn-3');
}

for (let i = 0; i < 5; i++) {
  smartHouseApp.undoCommand('btn-3');
}
