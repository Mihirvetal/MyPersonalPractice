const express =require('express');
const jwt = require("jsonwebtoken")
const connection = require('./db/connection');
const userModel = require('./models/usermodel');
const app = express()

const PORT=5000;
app.use(express.json())
const SECRETKEY = "HaBhaiTumHiHo"; // this will only know by the server.

const token = jwt.sign({  // not a good idea to store any personal information of the user in this payload

    id: userModel._id,

}, SECRETKEY)
// so for every time we have to check the auth so we can create the MW for checking the auth and we dont need to write the auth process again and again

app.use((req,res,next)=>{
    if(!req.headers.authorization) return res.status(401).send("nikal yaha se")
    next()
})
// the first step towards the authorization 

app.get('/profile', (req,res)=>{
    // this is the long way to check the authorization
            // const auth = req.headers.authorization;
            // if (!auth){
            //     return res.status(401).send("Nikal yaha se")
            // }
    // the shortway to check the auth
    // if(!req.headers.authorization) return res.status(401).send("nikal yaha se")
    return res.send("Profile page")
})

app.post("/login", async (req,res)=>{
    const {email, password} = req.body;
    const user = await userModel.findOne({
        email: email
    })

    if(!user || user.password !== password){
        return res.status(401).send("Invalid Credentials")
    }

    return res.send({
        message: "Login Success",
        token: token
    })

})

// for checking if the token which is created is correct or not 

app.use((req,res,next)=>{
    const token = req.headers.authorization


    if (!token){
        return res.status(401).send("niklo beta")
    }

    try {
        jwt.verify(token,SECRETKEY);
        next()
    }catch(e){
        return res.status(401).send("Invalid token");
    }
})


app.post("/create-lecture", (req,res)=>{
    return res.send("created")
})
app.post("/delete-lecture", (req,res)=>{
    return res.send("deleted")
})
app.post("/update-lecture", (req,res)=>{
    return res.send("updated")
})
app.post("/get-lecture", (req,res)=>{
    return res.send("Read")
})






app.get('/students', (req,res)=>{
    return res.send([1,2,3,4,5])
})
app.listen(PORT,async()=>{
    await connection;
console.log("DB");
console.log("object");
})