import { MallardDuck } from "./models/mallard";
import { DecoyDuck } from "./models/decoy";

(() => {

  const mallardDuck = new MallardDuck();
  const decoyDuck = new DecoyDuck();

  mallardDuck.performQuack();
  mallardDuck.performFly();

  decoyDuck.performQuack();
  decoyDuck.performFly();

})();
