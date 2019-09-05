export class Light {

  private isOn = false;

  constructor(private name: string) { }

  public on() {
    this.isOn = true;
    console.log(`Now, the ${ this.name } light is on`);
  }

  public off() {
    this.isOn = false;
    console.log(`Now, the ${ this.name } light is off`);
  }

}