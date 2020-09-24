const Database = require('./../configurations/Database');
const db = new Database();
const sequelize = db.connection;
const Todo = sequelize.import('../models/Todo');

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll();

    res.status(200).json({
      status: 'success',
      data: {
        todos,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      err,
      message: 'Something is wrong! Please try again later!',
    });
  }
};

exports.getTodo = async (req, res) => {
  try {
    const todo = await Todo.findOne({ where: { id: req.params.id } });

    res.status(200).json({
      status: 'success',
      data: {
        todo,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      err,
      message: 'Something is wrong! Please try again later!',
    });
  }
};

exports.addTodo = async (req, res) => {
  try {
    const newTodo = new Todo(req.body);

    await Todo.create({
      todoTitle: newTodo.todoTitle,
      todoResponsibility: newTodo.todoResponsibility,
      todoPriority: newTodo.todoPriority,
    });

    res.status(201).json({
      status: 'success',
      data: {
        todo: newTodo,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      err,
      message: 'Something is wrong! Please try again later!',
    });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const updateTodo = new Todo(req.body);

    await Todo.update(
      {
        todoTitle: updateTodo.todoTitle,
        todoResponsibility: updateTodo.todoResponsibility,
        todoPriority: updateTodo.todoPriority,
        todoCompleted: updateTodo.todoCompleted,
      },
      {
        where: { id: req.params.id },
      }
    );

    res.status(200).json({
      status: 'success',
      data: {
        todo: updateTodo,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      err,
      message: 'Something is wrong! Please try again later!',
    });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    await Todo.destroy({ where: { id: req.params.id } });

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      err,
      message: 'Something is wrong! Please try again later!',
    });
  }
};
