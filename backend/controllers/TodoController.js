const Database = require('./../configurations/Database');
const db = new Database();
const sequelize = db.connection;
const Todo = sequelize.import("../models/Todo");

exports.getAllTodos = (req, res) => {
  Todo.findAll().then(todos => {
    res.json(todos);
  });
}

exports.getTodo = (req, res) => {
  let id = req.params.id;
  Todo.findOne({
    where: {
      id: id,
    }
  }).then(todos => {
    res.json(todos);
  });
}

exports.addTodo = (req, res) => {
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
}

exports.updateTodo = (req, res) => {
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
}

exports.deleteTodo = (req, res) => {
  let id = req.params.id;
  Todo.destroy({
    where: {
      id: id,
    }
  }).then(status => {
    if(status) {
      res.json({
        "status": "Data successfully deleted!",
        "todoID": id
      })
    }
    else {
      res.status(400).send("Failed to get data to delete!");
    }
  })
  .catch(err => {
    console.log("Something is wrong! Error: ", err);
  });
}