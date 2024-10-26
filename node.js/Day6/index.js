const express = require("express");
const app = express();
const PORT = 5000;
const movieRouter= require('./routes/movies.routes')



app.use((express.json()))
app.use('/sor', (req,res)=>{
    return res.send("done")
})



app.use('/movie',movieRouter)
app.listen(PORT , ()=>{
    console.log("http://localhost:5000");
})
