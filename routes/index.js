const express = require('express');
const router = express.Router();

const todos = [];

router
  .route('/todo')
    .get((req, res) => {
      const status = 200;
      return res
        .status(status)
        .json({
          status: status,
          success: true,
          todos
        });
    })
    .post((req, res) => {
      const status = 201;
      const { todo } = req.body;
      const todoWithId = { id: todos.length, ...todo };
      todos.push(todoWithId);
      return res
        .status(status)
        .json({
          status: status,
          success: true,
          todo: todoWithId
        });
    })
    .put((req, res) => {
      const status = 200;
      const { todo, todo: { id } } = req.body;
      const selectedTodo = todos[id];
      const updatedTodo = { ...selectedTodo, ...todo };
      todos[id] = updatedTodo;
      return res
        .status(status)
        .json({
          status: status,
          success: true,
          todo: updatedTodo
        });
    })
    .patch((req, res) => {
      const status = 200;
      const { todo, todo: { id } } = req.body;
      todos[id] = todo;
      return res
        .status(status)
        .json({
          status: status,
          success: true,
          todo: todos[id]
        });
    })
    .delete((req, res) => {
      const status = 200;
      const { todo: { id } } = req.body;
      todos.splice(id, 1);
      return res
        .status(status)
        .json({
          status: status,
          success: true
        });
    });

module.exports = router;
