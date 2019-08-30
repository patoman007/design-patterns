import { Beverage } from "../beverages/beverage.class";

export abstract class CondimentDecorator extends Beverage {

  abstract getDescription(): string;

}
