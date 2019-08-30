import { Beverage } from "./beverage.class";

export class DarkRoast extends Beverage {

  constructor() {
    super();
    this.description = 'Dark Roast';
  }

  cost(): number {
    return 1.12;
  }

}