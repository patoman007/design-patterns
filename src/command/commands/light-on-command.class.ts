import { CommandInterface } from "./command.interface";
import { Light } from "../models/light.class";

export class LightOnCommand implements CommandInterface {

  constructor(private light: Light) { }

  execute() {
    this.light.on();
  }

  undo() {
    this.light.off();
  }

}