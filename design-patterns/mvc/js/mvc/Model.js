export default class Model {
  #value;
  
  constructor() {
    this.#value = 0;
  }

  set value(value) {
    this.#value = value;

    this.onStateChanged(this.#value);
  }
  
  get value() {
    return this.#value;
  }

  decrement() {
    if (this.#value <= -5)
      this.#value = 5;
    else
      this.#value--;

    this.onStateChanged(this.#value);
  }
  
  increment() {
    if (this.#value >= 5)
      this.#value = -5;
    else
      this.#value++;

    this.onStateChanged(this.#value);
  }

  // *** binding: model -> controller ***

  bindOnStateChange(handler) {
    this.onStateChanged = handler;
  }
}
