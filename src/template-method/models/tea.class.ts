import { CaffeineBeverage } from "./caffeine-beverage.class";

export class Tea extends CaffeineBeverage {

  brew() {
    console.log('Steeping the tea');
  }

  addCondiment() {
    console.log('Adding lemon');
  }

}
