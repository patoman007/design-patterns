import { RemoteControl } from "./models/remote-control.class";
import { LightOnCommand } from "./commands/light-on-command.class";
import { Light } from "./models/light.class";
import { LightOffCommand } from "./commands/light-off-command";

(() => {

  const remoteControl = new RemoteControl();
  const livingroomLight = new Light('livingroom');
  const bedroomLight = new Light('bedroom');

  const livingroomLightOn = new LightOnCommand(livingroomLight);
  const livingroomLightOff = new LightOffCommand(livingroomLight);
  const bedroomLightOn = new LightOnCommand(bedroomLight);
  const bedroomLightOff = new LightOffCommand(bedroomLight);
  
  remoteControl.setButton(livingroomLightOn);
  remoteControl.setButton(bedroomLightOn)
  remoteControl.setButton(livingroomLightOff);
  remoteControl.setButton(bedroomLightOff);

  remoteControl.pressButton(1);
  remoteControl.pressButton(2);
  remoteControl.pressButton(3);
  remoteControl.pressUndo();

  remoteControl.pressButton(3);
  remoteControl.pressButton(4);
})();
