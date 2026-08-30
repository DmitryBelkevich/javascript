// State
function State() {
  this.operation = function() {};
  this.nextState = function() {};
}

// реализация State

// первое состояние
function StateA(widjet) {
  var dublicate = this; // ссылка на инстанцирующийся объект (т.к. this может меняться)
  
  this.someMethod = function() {
    console.log("StateA.operation");
    dublicate.nextState();
  };
  
  this.nextState = function() {
    console.log("StateA > StateB");
    widjet.onNextState(new StateB(widjet));
  };
}

StateA.prototype = new State();
StateA.prototype.constructor = StateA;

// второе состояние
function StateB(widjet) {
  var dublicate = this;
  
  this.someMethod = function() {
    console.log("StateB.operation");
    dublicate.nextState();
  };
  
  this.nextState = function() {
    console.log("StateB > StateA");
    widjet.onNextState(new StateA(widjet));
  };
}

StateB.prototype = new State();
StateB.prototype.constructor = StateB;

// Context
// "интерфейс" Widget

function Widget() {
  this.operation = function() {};
  this.onNextState = function(state) {};
}

// реализация Widget

function Widget1() {
  var state = new StateA(this);
  
  this.operation = function() {
    state.someMethod();
  };
  
  this.onNextState = function(newState) {
    state = newState;
  };
}

Widget1.prototype = new Widget();
Widget1.prototype.constructor = Widget1;

// использование

var widget = new Widget1();

widget.operation(); // StateA.operation
// StateA > StateB
widget.operation(); // StateB.operation
// StateB > StateA
