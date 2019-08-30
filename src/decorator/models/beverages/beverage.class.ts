export abstract class Beverage {

  description = 'Unknown Beverage';
  abstract cost(): number;

  getDescription(): string {
    return this.description;
  }

}