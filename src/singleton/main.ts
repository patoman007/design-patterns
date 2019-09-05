import { Singleton } from "./singleton.class";

(() => {
  const instance = Singleton.GetInstance();
  const otherInstance = Singleton.GetInstance();
  console.log(instance === otherInstance);
})();
