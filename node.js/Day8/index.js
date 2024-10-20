const express =require('express');

const app = express()

const PORT=5001;

app.get('/profile', (req,res)=>{
    const auth = req.headers.authorization;

    if (!auth){
        return res.status(401).send("Nikal yaha se")
    }
    return res.send("Profile page")
})
app.listen(PORT,()=>{
console.log("object");
})