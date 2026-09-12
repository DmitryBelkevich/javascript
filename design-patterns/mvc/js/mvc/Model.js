export default class Model {
  #value;
  
  constructor() {
    this.#value = 0;
  }

  set value(value) {console.log("setter");
    this.#value = value;
  }
  
  get value() {console.log("getter");
    return this.#value;
  }
}
