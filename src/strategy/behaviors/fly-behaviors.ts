export interface FlyBehaviorInterface {
  fly: () => void;
}

export class FlyWithWings implements FlyBehaviorInterface {

  fly() {
    console.log('I\'m flying!!!');
  }

}

export class FlyNoWay implements FlyBehaviorInterface {

  fly() {
    console.log('I can\'t fly');
  }

}
