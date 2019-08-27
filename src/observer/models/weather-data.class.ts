import { SubjectInterface } from "./subject.interface";
import { ObserverInterface } from "./observer.interface";

export class WeatherData implements SubjectInterface {

  private observers: ObserverInterface[] = [];
  private temperature: number = 0;
  private humidity: number = 0;
  private pressure: number = 0;

  constructor() { }

  registerObserver(observer: ObserverInterface) {
    this.observers.push(observer);
  }

  removeObserver(observer: ObserverInterface) {
    const index = this.observers.indexOf(observer);
    if (index >= 0) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers() {
    this.observers.forEach(observer => {
      observer.update(this.temperature, this.humidity, this.pressure);
    });
  }

  measurementsChanged() {
    this.notifyObservers();
  }

  setMeasurements(temp: number, humidity: number, pressure: number) {
    this.temperature = temp;
    this.humidity = humidity;
    this.pressure = pressure;
    console.log('\n');
    this.measurementsChanged();
  }

}