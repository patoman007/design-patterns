import { HomeTheaterFacade } from "./models/home-theater-facade.class";
import { Tv } from "./models/tv-class";
import { AudioSystem } from "./models/audio-system.class";
import { Dvd } from "./models/dvd-class";

(() => {
  const tv = new Tv();
  const audio = new AudioSystem();
  const dvd = new Dvd();
  const homeTheater = new HomeTheaterFacade(tv, audio, dvd);

  homeTheater.watchMovie();
  console.log();
  homeTheater.endMovie();
})();
