if (typeof Object.create !== 'function') {
  Object.create = function(o) {
    var F = function() {};
    F.prototype = o;
    return new F();
  };
}

window.onload = function() {
  addItem = document.getElementById('add-item');
  inputTask = document.getElementById('new-task-field');


  var addEvent = function(event) {
    if (event.keyCode === 13 || event.keyCode === 0) {
      todoApp.addTodo(inputTask.value);
      inputTask.value = "";
    }
  }

  addItem.onclick = addEvent;
  inputTask.onkeypress = addEvent;
}

var todoApp = {
  todoList: function() {
    return document.getElementById('todo-items');
  },

  completedList: function() {
    return document.getElementById('completed-items');
  },

  addTodo: function(name) {
    var todo = Object.create(todoItem);
    todo.setName(name);
    this.appendTodo(todo);
  },

  appendTodo: function(todo) {
    if (todo.todoName.length !== 0) {
      this.todoList().appendChild(todo.render());
    }
  }
}

var todoItem = {
  setName: function(name) {
    this.todoName = name;
  },

  render: function() {
    var newTodo = document.createElement('li');
    var name = document.createElement('div');
    var actions = document.createElement('div');
    var metaData = document.createElement('span');

    name.className = "items";
    actions.className = "actions";
    metaData.className = "meta-data";

    var date = new Date();
    metaData.innerHTML = "Created on: " + date.toLocaleDateString() + " ";
    actions.appendChild(metaData);

    name.innerHTML = this.todoName;
    name.appendChild(actions);

    newTodo.appendChild(name);

    return newTodo;
  }

}

var Create = function() {};
Create.prototype = todoItem;


