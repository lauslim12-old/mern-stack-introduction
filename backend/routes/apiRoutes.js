const express = require('express');
const TodoController = require('../controllers/TodoController');
const todoRoutes = express.Router();

todoRoutes
  .route('/')
  .get(TodoController.getAllTodos)
  .post(TodoController.addTodo);

todoRoutes
  .route('/:id')
  .get(TodoController.getTodo)
  .put(TodoController.updateTodo)
  .delete(TodoController.deleteTodo);

module.exports = todoRoutes;
