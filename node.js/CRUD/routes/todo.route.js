const {gettodo,posttodo, deleteTodo, upTodo} = require("../controller/todo.controller");
const {Router} = require('express');
const todoRouter = Router()

todoRouter.get('/get-todos', gettodo);

todoRouter.post("/post", posttodo)

todoRouter.delete('/delete/:id',deleteTodo)

todoRouter.patch('/upd/:id',upTodo)
module.exports = todoRouter;