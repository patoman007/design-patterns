import { ObserverInterface } from "../models/observer.interface";
import { DisplayInterface } from "../models/display.interface";
import { SubjectInterface } from "../models/subject.interface";

export class CurrentConditionsDisplay implements ObserverInterface, DisplayInterface {

  private temperature: number = 0;
  private humidity: number = 0;
  
  constructor(private weatherData: SubjectInterface) {
    this.weatherData.registerObserver(this);
  }

  update(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.display();
  }

  display() {
    let info = `Current conditions: ${ this.temperature } F degrees`;
    info += ` and ${ this.humidity }% humidity.`;
    console.log(info);
  }

}
