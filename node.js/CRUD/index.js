const express = require("express");
const app = express();
const connection = require('./db/connection')
const todoRouter = require('./routes/todo.route')

app.use(express.json());

app.use('/', todoRouter)


app.listen(3000, async ()=>{
    await connection
    console.log("http://localhost:3000");
})