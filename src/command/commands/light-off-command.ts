import { CommandInterface } from "./command.interface";
import { Light } from "../models/light.class";

export class LightOffCommand implements CommandInterface {

  constructor(private light: Light) {}

  execute() {
    this.light.off();
  }

  undo() {
    this.light.on();
  }

}