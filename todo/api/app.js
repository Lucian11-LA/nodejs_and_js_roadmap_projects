const express = require('express');
const bodyParser =  require('body-parser');
const app = express();

app.use(bodyParser.json());


app.get('/api/hello',(req,res)=>{
    res.json({ message: 'Hello world' });
});

let todos = [];

app.get('/api/todos',(req,res)=>{
    res.json(todos);
})

app.post('/api/todos',(req,res)=>{
    const newTodo = req.body;
    todos.push(newTodo);
})
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);   
})