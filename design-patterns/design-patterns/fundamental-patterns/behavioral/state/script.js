// State
function State() {
  this.operation = function() {};
  this.nextState = function() {};
}

// реализация State

// первое состояние
function StateA(context) {
  var dublicate = this; // ссылка на инстанцирующийся объект (т.к. this может меняться)
  
  this.operation = function() {
    console.log("StateA.operation");
    dublicate.nextState();
  };
  
  this.nextState = function() {
    console.log("StateA > StateB");
    context.onNextState(new StateB(context));
  };
}

StateA.prototype = new State();
StateA.prototype.constructor = StateA;

// второе состояние
function StateB(context) {
  var dublicate = this;
  
  this.operation = function() {
    console.log("StateB.operation");
    dublicate.nextState();
  };
  
  this.nextState = function() {
    console.log("StateB > StateA");
    context.onNextState(new StateA(context));
  };
}

StateB.prototype = new State();
StateB.prototype.constructor = StateB;

// Context
// "интерфейс" Context

function Context() {
  this.operation = function() {};
  this.onNextState = function(state) {};
}

// реализация Context

function Context1() {
  var state = new StateA(this);
  
  this.operation = function() {
    state.someMethod();
  };
  
  this.onNextState = function(newState) {
    state = newState;
  };
}

Context1.prototype = new Context();
Context1.prototype.constructor = Context1;

// использование

var context = new Context1();

context.operation(); // StateA.operation
// StateA > StateB
context.operation(); // StateB.operation
// StateB > StateA
