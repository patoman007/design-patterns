import { Espresso } from "./models/beverages/espresso-beverage.class";
import { DarkRoast } from "./models/beverages/darkroast-beverage.class";
import { HouseBlend } from "./models/beverages/houseblend-beverage.class";
import { MochaDecorator } from "./models/decorators/mocha-decorator.class";

(() => {

  const beverage = new Espresso();
  const beverage2 = new DarkRoast();
  const beverage3 = new MochaDecorator(beverage2);

  console.log(`${ beverage.getDescription() }: \t$${ beverage.cost() }`);
  console.log(`${ beverage2.getDescription() }: \t$${ beverage2.cost() }`);
  console.log(`${ beverage3.getDescription() }: \t$${ beverage3.cost() }`);
})();
