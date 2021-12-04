const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//Connect to the database
mongoose.connect('mongodb://localhost:27017/todo_node', ()=>{});

//Create a schema - this is like a blueprint
const todoSchema = new mongoose.Schema({
    item: String
});

const Todo = mongoose.model('Todo', todoSchema);

const urlEncodedParser = bodyParser.urlencoded({extended: true})
// let data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding'}]

module.exports = function (app){
    
    app.get('/todo', function (req, res) {
        //get data from mongo and pass it to view
        Todo.find({}, function (err, data) {
            if (err) throw err;
            res.render('todo', {todos: data})
        })

    });

    app.post('/todo', urlEncodedParser, function (req, res) {
        //get data from view and add to mongo
        const newTodo = Todo(req.body).save(function (err, data) {
            if (err) throw err;
            res.json(data);
        })
     });

    app.delete('/todo/:item', function (req, res) {
        //Delete the requested item from mongoDB
        Todo.find({item: req.params.item.replace(/\-/g, "")}).deleteOne(function (err, data) {
            if (err) throw err;
            res.json(data);
        })
    });



};