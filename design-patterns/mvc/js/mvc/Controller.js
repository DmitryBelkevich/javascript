import Model from './Model.js';
import View from './View.js';

export default class Controller {
  constructor() {
    // *** init ***
    
    this.model = new Model();
    this.view = new View();

    // *** binding controller-view ***

    // binding: view -> model
    this.view.bindDecrementButton(this.decrement);
    this.view.bindIncrementButton(this.increment);

    // binding: model -> view
    this.model.bindOnStateChange(this.stateChange);

    // *** render ***
    this.stateChange();
  }

  // *** handlers ***

  // view
  decrement = () => {
    this.model.decrement();
  }

  increment = () => {
    this.model.increment();
  }

  // model
  stateChange = () => {
    this.view.setValue(this.model.value);
  }
}
