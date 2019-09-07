export class AudioSystem {

  private isOn = false;

  constructor() { }

  on() {
    this.isOn = true;
    console.log(`Audio system is on`);
  }

  off() {
    this.isOn = false;
    console.log(`Audio system is off`);
  }

}