export class Dvd {

  private isOn = false;
  private isPlaying = false;

  constructor() {}

  on() {
    this.isOn = true;
    console.log('DVD is on');
  }

  play() {
    if (!this.isOn) { return; }
    this.isPlaying = true;
    console.log('DVD start playing');
  }

  stop() {
    if (!this.isOn) { return; }
    this.isPlaying = false;
    console.log('DVD stop playing');
  }

  off() {
    this.stop();
    this.isOn = true;
    console.log('DVD is off');
  }

}