const ToDoList = require('./TodoList');

const todo = new ToDoList();

todo.addTask("My work");
console.log(todo.getAllTasks());