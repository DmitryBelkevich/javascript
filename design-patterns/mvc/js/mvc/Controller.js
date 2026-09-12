import Model from './Model.js';
import View from './View.js';

export default class Controller {
  constructor() {
    // model
    this.model = new Model();

    // view
    this.view = new View();

    // *** binding controller-view ***

    this.view.bindDecrementButton(this.decrement);
    this.view.bindIncrementButton(this.increment);

    // render
    this.view.setValue(this.model.value);
  }

  // *** handlers ***

  decrement = () => {
    this.model.decrement();
    this.view.setValue(this.model.value);
  }

  increment = () => {
    this.model.increment();
    this.view.setValue(this.model.value);
  }
}
