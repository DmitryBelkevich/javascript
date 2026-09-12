export default class Model {
  #value;
  
  constructor() {
    this.#value = 0;
  }

  set value(value) {
    this.#value = value;
  }
  
  get value() {
    return this.#value;
  }
}
