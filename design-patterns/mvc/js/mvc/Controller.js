import Model from './Model.js';
import View from './View.js';

export default class Controller {
  constructor() {
    // model
    const model = new Model();

    // view
    const view = new View();

    // *** binding controller-view ***

    this.view.bindButton1(this.handler1);
    this.view.bindButton2(this.handler2);
  }

  // *** handlers ***

  handler1 = () => {
    console.log("-");
  }

  handler2 = () => {
    console.log("+");
  }
}
