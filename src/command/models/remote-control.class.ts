import { CommandInterface } from "../commands/command.interface";

export class RemoteControl {

  private buttons: CommandInterface[] = [];
  private executedActions: CommandInterface[] = [];

  public setButton(command: CommandInterface) {
    this.buttons.push(command);
  }

  public pressButton(atIndex: number) {
    if ((atIndex - 1) >= this.buttons.length) { return; }
    const command = this.buttons[atIndex - 1];
    command.execute();
    this.executedActions.push(command);
  }

  public pressUndo() {
    if (this.executedActions.length === 0) { return; }
    const lastCommand = this.executedActions.pop();
    lastCommand!.undo();
  }

}
