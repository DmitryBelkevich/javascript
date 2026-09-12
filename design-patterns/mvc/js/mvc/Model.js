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

  decrement() {
    if (this.#value <= -5)
      this.#value = 5;
    else
      this.#value--;

    this.handler();
  }
  
  increment() {
    if (this.#value >= 5)
      this.#value = -5;
    else
      this.#value++;

    this.handler();
  }

  // *** binding: model-controller ***

  bindOnStateChange(handler) {
    this.handler = handler;
  }
}
