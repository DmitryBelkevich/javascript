export default class View {
  constructor() {
    this.container = document.getElementById('container');

    this.value_e = document.createElement('div');

    // fill container
    this.container.append(this.value_e);
  }
}
