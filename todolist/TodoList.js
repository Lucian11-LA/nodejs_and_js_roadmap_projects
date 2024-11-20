class ToDoList {
    constructor(){
        this.todos = [];
    }

    //Create a task 
    addTask(taskDescription){

        const newTask = {
            id: this.todos.length + 1,
            description: taskDescription,
            completed: false,
        };

        this.todos.push(newTask);
        return newTask;
    }

    //read all task
    getAllTasks(){
        return this.todos;  
    }

    //Update tasks
    updateTask(taskId, updatedDescription){
        const task = this.todos.find(task => task.id === id);
        if(task){
            task.description = updatedDescription;
            return task;
        }
        return null;
    }

    //complete a task
    toggleCompletion(id){
        const task = this.todos.find(task => task.id == id);
        if(task){
            task.completed = !task.completed;
            return task;
        }
        return null;
    }

    //delete a task
    deleteTask(id){
        const index = this.todos.findIndex(task => task.id == id);
        if(index!== -1){
            const [deletedTask] = this.todos.splice(index, 1);
            return deletedTask;
        }
        return null;
    }
}

