export interface QuackBehaviorInterface {
  quack: () => void;
}

export class Quack implements QuackBehaviorInterface {

  quack() {
    console.log('Quack!');
  }

}

export class MuteQuack implements QuackBehaviorInterface {

  quack() {
    console.log('<< Silencce >>');
  }

}

export class Squeak implements QuackBehaviorInterface {

  quack() {
    console.log('Squeak');
  }

}