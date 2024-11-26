const TodoList = require('../model/TodoList');
const express = require('express');
const router = express.Router();

const todo = new TodoList();
router.get('/getTask/:id',(req,res,next)=>{
    const id = req.params.id;
    return res.status(200).json(todo.getTask(id));
});

router.get('/getAllTasks',(req,resp,next)=>{
   resp.json(todo.getAllTasks()); 
});

router.delete('/deleteTask/:id',(req,resp)=>{
    const id = req.params.id;
    todo.deleteTask(id);
});

router.put('/updateTask/:id/:desc',(req,resp)=>{
    const {id, desc} = req.params;

    todo.updateTask(id, desc);
});


module.exports =  router;