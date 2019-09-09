import { Tea } from "./models/tea.class";
import { Coffee } from "./models/cofee.class";

(() => {
  const coffee = new Coffee();
  const tea = new Tea();

  coffee.prepare();
  tea.prepare();
})();
