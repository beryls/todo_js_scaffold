// function todoApp() {
//   unfinished: [],
//   finished: [],
//   var addTodo: function() {
//     // create todo object, add to unfinished list
//   }
// }
window.onload = function() {
  addItem = document.getElementById('add-item');
  inputTask = document.getElementById('new-task-field');
  todoList = document.getElementById('todo-items');

  addItem.onclick = function(event){
    var name = inputTask.value;
    todoApp.addTodo(name);
    var newItem = document.createElement('li');
    newItem.innerText = name;
    todoList.appendChild(newItem);
    inputTask.value = "";
  };
};

var todoApp = {
  unfinished: [],
  finished: [],
  addTodo: function(name) {
    var task = new Create();
    task.name = name;
    if (task.name.length > 0) {
      this.unfinished.unshift(task);
    }
    // create todo object, add to unfinished list
  }
};

var todoItem = {
  done: false
};

var Create = function() {};
Create.prototype = todoItem;


