export default class Model {
  #value;
  
  constructor() {
    this.#value = 1;
  }

  set value(value) {
    this.#value = value;
  }
  
  get value() {
    return this.#value;
  }
}
