import Model from './Model.js';
import View from './View.js';

export default class Controller {
  constructor() {
    // model
    this.model = new Model();

    // view
    this.view = new View();

    // *** binding controller-view ***

    this.view.bindButton1(this.handler1);
    this.view.bindButton2(this.handler2);

    // render
    this.view.setValue(this.model.value);
  }

  // *** handlers ***

  handler1 = () => {
    this.model.#value--;
    console.log(this.model);
  }

  handler2 = () => {
    this.model.#value++;
    console.log(this.model);
  }
}
