const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Sequelize = require('sequelize');
const PORT = 8000;

// Global Middlewares
const app = express();
const todoRoutes = express.Router();
dotenv.config();

// Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_ENGINE,
  dialectOptions: {
    timezone: 'Etc/GMT+7',
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established!");
  })
  .catch((err) => {
    console.error("Unable to connect to the database! Error code: ", err);
  });

// Models
const Todo = sequelize.import(__dirname + "/models/Todo");

Todo.sync({ force: true }).then(() => {
  Todo.create({
    todoTitle: 'Create a MERN Application with Node.js!',
    todoResponsibility: 'Nicholas',
    todoPriority: 'High',
    todoCompleted: false
  });
  Todo.create({
    todoTitle: 'Create an Express.js Application with Node.js!',
    todoResponsibility: 'Nicholas',
    todoPriority: 'High',
    todoCompleted: false
  });
  Todo.create({
    todoTitle: 'Create a MariaDB Application with Sequelize and Node.js!',
    todoResponsibility: 'Nicholas',
    todoPriority: 'High',
    todoCompleted: false
  });
  Todo.create({
    todoTitle: 'Create a React Application with Node.js!',
    todoResponsibility: 'Nicholas',
    todoPriority: 'High',
    todoCompleted: false
  });
  Todo.create({
    todoTitle: 'Create a Node.js Application!',
    todoResponsibility: 'Nicholas',
    todoPriority: 'High',
    todoCompleted: false
  });
});

// Routing
todoRoutes.route('/').get(function(req, res) {
  Todo.findAll().then(todos => {
    res.json(todos);
  });
});

todoRoutes.route('/:id').get(function(req, res) {
  let id = req.params.id;
  Todo.findOne({
    where: {
      id: id,
    }
  }).then(todos => {
    res.json(todos);
  });
});

todoRoutes.route('/create').post(function(req, res) {
  let todo = new Todo(req.body);
  Todo.create({
    todoTitle: todo.todoTitle,
    todoResponsibility: todo.todoResponsibility,
    todoPriority: todo.todoPriority
  }).then(todos => {
    res.json({
      "status": "Successfully created!",
      "message": "New todo created!",
      "data": todos
    });
  });
});

todoRoutes.route('/update/:id').put(function(req, res) {
  let todo = new Todo(req.body);
  let id = req.params.id;
  Todo.findOne({
    where: {
      id: id,
    }
  }).then(status => {
    if(status === null) {
      res.status(400).send("Failed to fetch the data to update!");
    }
    else {
      Todo.update({
        todoTitle: todo.todoTitle,
        todoResponsibility: todo.todoResponsibility,
        todoPriority: todo.todoPriority,
        todoCompleted: todo.todoCompleted
      },
      {
        where: {
          id: req.params.id,
        }
      })
      .then(todos => {
        res.json({
          "status": "Data successfully updated!",
          "data": todos
        });
      });
    }
  })
  .catch(err => {
    console.log("Something is wrong! Error code: ", err);
  });
});

// Setting
app.use(cors());
app.use(bodyParser.json());
app.use('/todos', todoRoutes);

app.listen(PORT, function() {
  console.log("Server is running on port: " + PORT);
});