import { QuackBehaviorInterface } from "../behaviors/quack-behaviors";
import { FlyBehaviorInterface } from "../behaviors/fly-behaviors";

export abstract class Duck {

  protected quackBehavior: QuackBehaviorInterface;
  protected flyBehavior: FlyBehaviorInterface;

  swim() {
    console.log('All ducks float, even decoys!');
  }

  performQuack() {
    this.quackBehavior.quack();
  }

  performFly() {
    this.flyBehavior.fly();
  }

}
