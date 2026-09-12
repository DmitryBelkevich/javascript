export default class View {
  constructor() {
    // components
    this.value = document.createElement('div');
    
    this.decrement_button = document.createElement('button');
    this.decrement_button.textContent = "-";
    
    this.increment_button = document.createElement('button');
    this.increment_button.textContent = "+";
    
    // fill container
    document.body.append(this.value, this.decrement_button, this.increment_button);
  }

  // *** render ***

  setValue(value) {
    this.value.textContent = value;
  }

  // *** binding: view-controller ***

  bindDecrementButton(handler) {
    this.decrement_button.addEventListener("click", () => {
      handler();
    });
  }

  bindIncrementButton(handler) {
    this.increment_button.addEventListener("click", () => {
      handler();
    });
  }
}
