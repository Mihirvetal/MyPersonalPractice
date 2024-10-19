const express = require('express')
const movierouter = require('./routes/movieRouter')
const connection = require('./db/connection')
const app = express()
const PORT = 5000;
// when you want to use or access the req.body
app.use(express.json());


app.use('/',movierouter);






app.listen(PORT,async  ()=>{
    await connection;
    console.log(`http://localhost:${PORT}`);
})