export default class View {
  constructor() {
    this.value_e = document.createElement('div');
    this.button1 = document.createElement('button');
    this.button2 = document.createElement('button');

    // fill container
    document.body.append(this.value_e, this.button1, this.button2);
  }
}
