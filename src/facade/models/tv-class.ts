export class Tv {

  private isOn = false;

  on() {
    this.isOn = true;
    console.log('TV is on');
  }

  off() {
    this.isOn = false;
    console.log('TV is off');
  }

}
