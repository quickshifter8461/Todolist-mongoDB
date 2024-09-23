const express = require("express");
const {
  createTodo,
  fetchTodo,
  fetchTodoById,
  editTodoById,
  deleteTodo,
} = require("../controllers/todoController");
const validateTodoupdate = require('../middlewares/validateTodoUpdate')
const router = express.Router();

router.post("/todo",validateTodoupdate, createTodo);

router.get("/todo", fetchTodo);

router.get("/todo/:id", fetchTodoById);

router.put("/todo/:id",validateTodoupdate, editTodoById);

router.delete("/todo/:id", deleteTodo);

module.exports = router;
