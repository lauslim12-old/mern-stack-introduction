const express = require('express');
const TodoController = require('../controllers/TodoController');
const todoRoutes = express.Router();

todoRoutes.route('/').get(TodoController.getAllTodos);
todoRoutes.route('/:id').get(TodoController.getTodo);
todoRoutes.route('/create').post(TodoController.addTodo);
todoRoutes.route('/update/:id').put(TodoController.updateTodo);

module.exports = todoRoutes;