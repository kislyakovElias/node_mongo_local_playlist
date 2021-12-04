const express = require('express');
const app = express();
const toDoController = require('./controllers/todoController');

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//set up temp enj

app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'))

//fire controllers
toDoController(app);

// listen to port
app.listen(3000);
console.log('You r listening to the port 3000')
