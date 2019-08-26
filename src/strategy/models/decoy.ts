import { Duck } from "./duck";
import { FlyNoWay } from "../behaviors/fly-behaviors";
import { MuteQuack } from "../behaviors/quack-behaviors";

export class DecoyDuck extends Duck {

  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new MuteQuack();
  }

}