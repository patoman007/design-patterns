import { Beverage } from "./beverage.class";

export class Decaf extends Beverage {

  constructor() {
    super();
    this.description = 'Decaf';
  }

  cost(): number {
    return 1.16;
  }

}
