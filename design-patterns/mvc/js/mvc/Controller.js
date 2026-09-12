import Model from './Model.js';
import View from './View.js';

export default class Controller {
  constructor() {
    const model = new Model();
    const view = new View();
  }
}
