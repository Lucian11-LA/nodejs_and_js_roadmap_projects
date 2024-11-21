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

});

router.put('/updateTask/:id',(req,resp)=>{

});


module.exports =  router;