import { ObserverInterface } from "../models/observer.interface";
import { DisplayInterface } from "../models/display.interface";
import { WeatherData } from "../models/weather-data.class";

export class StatiscsDisplay implements ObserverInterface, DisplayInterface {
  
  private maxTemp: number = 0;
  private minTemp: number = 0;
  private tempSum: number = 0;
  private readingsCount: number = 0;

  constructor(private weatherData: WeatherData) {
    this.weatherData.registerObserver(this);
  }

  update(temp: number, humidity: number, pressure: number) {
    this.readingsCount++;
    this.tempSum += temp;
    
    if (temp > this.maxTemp) {
      this.maxTemp = temp;
    }

    if (temp < this.minTemp) {
      this.minTemp = temp;
    }

    this.display();
  }

  display() {
    const avg = this.tempSum / this.readingsCount;
    const info = `Avg/Max/Min temperature = ${ avg } / ${ this.maxTemp } / ${ this.minTemp}`;
    console.log(info);
  }

}
