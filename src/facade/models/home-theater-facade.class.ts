import { Tv } from "./tv-class";
import { AudioSystem } from "./audio-system.class";
import { Dvd } from "./dvd-class";

export class HomeTheaterFacade {

  constructor(private tv: Tv, private audio: AudioSystem, private dvd: Dvd) { }

  watchMovie() {
    this.tv.on();
    this.audio.on();
    this.dvd.on();
    this.dvd.play();
  }

  endMovie() {
    this.dvd.off();
    this.audio.off();
    this.tv.off();
  }

}