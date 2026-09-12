export default class View {
  constructor() {
    // components
    this.value = document.createElement('div');
    
    this.button_decrement = document.createElement('button');
    this.button_decrement.textContent = "-";
    
    this.button_increment = document.createElement('button');
    this.button_increment.textContent = "+";
    
    // fill container
    document.body.append(this.value, this.button_decrement, this.button_increment);
  }

  // *** render ***

  setValue(value) {
    this.value.textContent = value;
  }

  // *** binding view-controller ***

  bindDecrementButton(handler) {
    this.button_decrement.addEventListener("click", () => {
      handler();
    });
  }

  bindIncrementButton(handler) {
    this.button_increment.addEventListener("click", () => {
      handler();
    });
  }
}
