export abstract class CaffeineBeverage {

  public abstract brew(): void;
  public abstract addCondiment(): void;

  public prepare() {
    this.bolWater();
    this.brew();
    this.pourInCup();
    this.addCondiment();
    console.log();
  }

  private bolWater() {
    console.log('Boiling water ...');
  }

  private pourInCup() {
    console.log('Pouring into cup');
  }

}