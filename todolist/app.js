const express = require('express');
const path = require('path');
const index = require('./routes/todoList');
const app = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/',index);

app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
  
      var method = req.body._method
      delete req.body._method
      return method
    }
  }));
  

module.exports = app;