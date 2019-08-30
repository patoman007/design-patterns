import { CondimentDecorator } from "./condiment-decorator.class";
import { Beverage } from "../beverages/beverage.class";

export class MochaDecorator extends CondimentDecorator {

  constructor(public beverage: Beverage) {
    super();
  }

  getDescription(): string {
    return this.beverage.description + ', Mocha';
  }            

  cost(): number {
    return this.beverage.cost() + 0.20;
  }

}
