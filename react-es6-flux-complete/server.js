var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var fs = require('fs');

var app = express();
app.use(bodyParser.json());
app.use(cors());


var _todos = {};
var _history = {};

//************** TODOS ****************
app.get('/todos', function (req, res) {
    console.log("Fetching todos");
    res.json(_todos);
});

app.post('/todos', function (req, res) {
    console.log("Creating todo", req.body);

    var todo = req.body;
    todo.id = Date.now();
    todo.completed = false;
    _todos[todo.id] = todo;
    res.json(todo)
});

app.put('/todos/:id', function (req, res) {
    console.log("Updating todo id: " + req.params.id);

    var newState = req.body;
    var id = req.params.id;
    _todos[id] = Object.assign({}, _todos[id], newState);
    res.json(_todos[id]);
});

app.delete('/todos/:id', function (req, res) {
    console.log("Deleting todo id: " + req.params.id);

    delete _todos[req.params.id];
    res.status(204).send();
});

//************** HISTORY ****************
app.post('/history', function (req, res) {
    console.log("Creating history", req.body);

    var history = req.body;
    history.id = Date.now();
    _history[history.id] = history;
    res.json(history)
});

app.get('/history', function (req, res) {
    console.log("Fetching history ");
    var historyArray = [];
    for (var o in _history) {
        historyArray.push(_history[o]);
    }
    res.json(historyArray);
});


app.listen(3000);