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
  }
  
  increment() {
    if (this.#value >= 5)
      this.#value = -5;
    else
      this.#value++;
  }

  // *** binding: model-controller ***

  bindOnStateChange(handler) {
    handler();
  }
}
