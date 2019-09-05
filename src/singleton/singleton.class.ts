export class Singleton {

  private static instance: Singleton;

  static GetInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  private constructor() {}

}
