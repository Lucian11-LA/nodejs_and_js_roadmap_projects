const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');

class ToDoList {
    constructor(){
        try {
            this.todos = JSON.parse(localStorage.getItem('todos')) || [];
        } catch (e) {
            console.error('Error reading from localStorage', e);
            this.todos = [];
        }
    }

    // Save tasks to localStorage
    saveToLocalStorage(){
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    // Create a task
    addTask(taskDescription){
        const newTask = {
            id: Date.now(),  // Use a timestamp to ensure unique IDs
            description: taskDescription,
            completed: false,
        };

        this.todos.push(newTask);
        this.saveToLocalStorage();
        return newTask;
    }

    // Read all tasks
    getAllTasks(){
        return this.todos;
    }

    // Update task description
    updateTask(taskId, updatedDescription){
        const task = this.todos.find(task => task.id === taskId);
        if(task){
            task.description = updatedDescription;
            this.saveToLocalStorage();
            return task;
        }
        return null;
    }

    // Toggle completion status
    toggleCompletion(id){
        const task = this.todos.find(task => task.id === id);
        if(task){
            task.completed = !task.completed;
            this.saveToLocalStorage();
            return task;
        }
        return null;
    }

    // Delete a task
    deleteTask(id){
        const index = this.todos.findIndex(task => task.id === id);
        if(index !== -1){
            const [deletedTask] = this.todos.splice(index, 1);
            this.saveToLocalStorage();
            return deletedTask;
        }
        return null;
    }

    // Clear all tasks
    clearAllTasks() {
        this.todos = [];
        this.saveToLocalStorage();
    }
}

module.exports = ToDoList;
