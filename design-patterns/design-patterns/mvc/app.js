/**
 * 1. THE MODEL
 * Manages the application data, business logic, and state.
 * It does not know anything about the HTML or the DOM.
 */
class Model {
  constructor() {
    this.count = 0; // The application state
  }
  
  // Business logic methods to alter data
  increment() {
    this.count++;
    this._commit();
  }
  
  decrement() {
    if (this.count > 0) {
      this.count--;
      this._commit();
    }
  }
  
  // Register a callback function from the controller to notify state changes
  bindOnStateChanged(callback) {
    this.onStateChanged = callback;
  }
  
  // Triggers the view update via the registered callback
  _commit() {
    this.onStateChanged(this.count);
  }
}

/**
 * 2. THE VIEW
 * Manages the DOM manipulation, visual presentation, and UI layout.
 * It accepts user inputs but forwards them to the controller.
 */
class View {
  constructor() {
    // Cache DOM entry point
    this.app = document.getElementById('app');

    // Create UI elements dynamically
    this.title = document.createElement('h1');
    this.title.textContent = 'MVC Counter';

    this.counterDisplay = document.createElement('h2');
    
    this.incrementBtn = document.createElement('button');
    this.incrementBtn.textContent = '+';

    this.decrementBtn = document.createElement('button');
    this.decrementBtn.textContent = '-';

    // Append components to the main application shell
    this.app.append(this.title, this.counterDisplay, this.decrementBtn, this.incrementBtn);
  }

  // Updates the visual presentation layer based on the received data
  render(count) {
    this.counterDisplay.textContent = `Current Count: ${count}`;
  }

  // Bind event listeners to DOM elements and forward actions to the controller
  bindIncrement(handler) {
    this.incrementBtn.addEventListener('click', () => {
      handler();
    });
  }

  bindDecrement(handler) {
    this.decrementBtn.addEventListener('click', () => {
      handler();
    });
  }
}

/**
 * 3. THE CONTROLLER
 * Acts as the middleman between the Model and the View.
 * It intercepts user interactions from the View and instructs the Model to update.
 */
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // 1. Connect Model events to View rendering
    this.model.bindOnStateChanged(this.handleStateChange);

    // 2. Connect View events to Model actions
    this.view.bindIncrement(this.handleIncrement);
    this.view.bindDecrement(this.handleDecrement);

    // Run the initial render
    this.handleStateChange(this.model.count);
  }
  
  // Callback: Updates the View when the Model data changes
  handleStateChange = (count) => {
    this.view.render(count);
  }
  
  // Callback: Instructs Model to add to the total
  handleIncrement = () => {
    this.model.increment();
  }
  
  // Callback: Instructs Model to subtract from the total
  handleDecrement = () => {
    this.model.decrement();
  }
}

// Initialize the application components
const app = new Controller(new Model(), new View());
