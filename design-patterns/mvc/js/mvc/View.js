export default class View {
  constructor() {
    this.container = document.getElementById('container');

    this.value_e = document.createElement('div');

    this.button1_e = document.createElement('button');
    this.button2_e = document.createElement('button');

    // fill container
    this.container.append(this.value_e, this.button1_e, this.button2_e);
  }
}
