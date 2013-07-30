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

    actions.appendChild(this.completedButton());

    name.innerHTML = this.todoName;
    name.appendChild(actions);

    newTodo.appendChild(name);

    return newTodo;
  },

  completedButton: function() {
    var button = document.createElement('button');
    button.className = "complete";
    button.innerHTML = "completed";
    var that = this;
    button.onclick = function(event) {
      var button = event.target;
      var todo = todoApp.todoList().removeChild(that.getTodo(event));
      var metaData = that.getMetaData(event);
      var date = new Date();
      metaData.innerHTML = "Completed on: " + date.toLocaleDateString() + " ";
      button.parentNode.removeChild(button);
      todoApp.completedList().appendChild(todo);
    };
    return button;
  },

  getTodo: function(event) {
    return event.target.parentNode.parentNode.parentNode;
  },

  getMetaData: function(event) {
    return event.target.parentNode.getElementsByTagName("span")[0];
  }
}


