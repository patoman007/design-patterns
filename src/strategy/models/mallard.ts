import { Duck } from "./duck";
import { Quack } from "../behaviors/quack-behaviors";
import { FlyWithWings } from "../behaviors/fly-behaviors";

export class MallardDuck extends Duck {

  constructor() {
    super();
    this.quackBehavior = new Quack();
    this.flyBehavior = new FlyWithWings();
  }

}