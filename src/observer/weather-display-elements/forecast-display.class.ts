import { ObserverInterface } from "../models/observer.interface";
import { DisplayInterface } from "../models/display.interface";
import { WeatherData } from "../models/weather-data.class";

export class ForecastDisplay implements ObserverInterface, DisplayInterface {

  private currentPressure: number = 0;
  private lastPressure: number = 0;
  
  constructor(private weatherData: WeatherData) { 
    this.weatherData.registerObserver(this);
  }

  update(temp: number, humidity: number, pressure: number) {
    this.lastPressure = this.currentPressure;
    this.currentPressure = pressure;
    this.display();
  }

  display() {
    const more = 'Improving weather on the way!';
    const same = 'More of the same';
    const less = 'Watch out for cooler, rainy weather';
    const info = this.currentPressure > this.lastPressure 
      ? more : this.currentPressure < this.lastPressure ? less: same;
    console.log('Forecast: ' + info);
  }

}
