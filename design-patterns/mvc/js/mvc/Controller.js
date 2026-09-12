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
    this.view.setValue(this.model.value);
  }

  // *** handlers ***

  // view
  decrement = () => {
    this.model.decrement();
    this.view.setValue(this.model.value);
  }

  increment = () => {
    this.model.increment();
    this.view.setValue(this.model.value);
  }

  // model
  stateChange = () => {
    console.log("state has been changed");
  }
}
