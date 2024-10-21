const express = require("express");
const app = express();
const PORT = 5000

app.use('/', (req,res)=>{
    return res.send("done")
})


app.listen(PORT , () =>{
    console.log("http://localhost:5000");
})