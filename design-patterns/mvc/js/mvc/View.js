export default class View {
  constructor() {
    this.value = document.createElement('div');
    
    this.button1 = document.createElement('button');
    this.button1.textContent = "-";
    
    this.button2 = document.createElement('button');
    this.button2.textContent = "+";
    
    // fill container
    document.body.append(this.value_e, this.button1, this.button2);
  }

  // *** render ***

  setValue(value) {
    this.value.textContent = value;
  }

  // *** binding view-controller ***

  bindButton1(handler) {
    this.button1.addEventListener("click", () => {
      handler();
    });
  }

  bindButton2(handler) {
    this.button2.addEventListener("click", () => {
      handler();
    });
  }
}
