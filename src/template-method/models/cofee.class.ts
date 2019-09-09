import { CaffeineBeverage } from "./caffeine-beverage.class";

export class Coffee extends CaffeineBeverage {

  public brew() {
    console.log('Dripping cofee through filter');
  }

  public addCondiment() {
    console.log('Adding sugar and milk');
  }

}
