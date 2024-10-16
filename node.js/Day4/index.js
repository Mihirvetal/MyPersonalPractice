// Middleware in Express.js refers to functions that have access to the request (req), response (res), and the next function in the application's request-response cycle. These functions can modify the req and res objects, end the request-response cycle, or pass control to the next middleware function in the stack using the next() function.


const express = require('express')
const app = express();

app.use((req , res)=>{
    
})  // use to create the MW or like a global MW

app.get('/', (req,res)=>{
    return res.send('<p style="font-size:120px">Mihir</p>')
})

app.listen(5000, ()=>{
    console.log("http://localhost:5000");
})