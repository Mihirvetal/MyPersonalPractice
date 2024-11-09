// const express = require("express");
// const jwt = require("jsonwebtoken");
// const connection = require('./db/connection');
// const UserModel = require('./models/user.model');
// const authMW = require('./middlewares/auth.middleware');


// const app = express()
// const PORT =5000;

// app.use(express.json())




// app.get("/about", (req,res)=>{
//     res.send("About Page")
// })




// const SECRETKEY= "HABHAITUHIHE";
// app.post("/login",async (req,res)=>{
//     const {email,password} = req.body;
//     const user = await UserModel.findOne({
//         email:email,
//     })
//     if(!user || user.password !== password){
//         return res.status(401).send("Invalid credentials")
//     }
//     const token = jwt.sign({
//         id:user._id, 
//         name: user.name,
//         role:user.role
//     },SECRETKEY,{expiresIn : "1 hour"})

// })



// app.use((req,res,next)=>{
//     const tokenheader = req.headers.authorization;
//     if (!tokenheader){
//         return res.status(401).send("Unauthorized")
//     }


//     const tokenvalue = tokenheader;
//     // checking that the token is valid or not 
//     try{
//         jwt.verify(tokenvalue, SECRETKEY);
//         next()

//     }catch(e){
//         return res.status(401).send("invalid token")
//     }

// })








// app.post("/create-lecture", (req,res)=>{
//     return res.send("lecture created")
// })
// app.post("/get-lecture", (req,res)=>{
//     return res.send("lectures")
// })
// app.post("/delete-lecture/:id", (req,res)=>{
//     return res.send("lecture deleted")
// })
// app.post("/update-lecture/:id", (req,res)=>{
//     return res.send("lecture updated")
// })






// app.listen(PORT, async ()=>{
//     await connection;
//     console.log(" db conctd");
//     console.log(`http://localhost:${PORT}`);
// })


const express = require("express");
const jwt = require("jsonwebtoken");
const connection = require('./db/connection');
const UserModel = require('./models/user.model');
const authMW = require('./middlewares/auth.middleware');

const app = express();
const PORT = 5000;
const SECRETKEY = "HABHAITUHIHE";

app.use(express.json());

app.get("/about", (req, res) => {
    res.send(UserModel.find());
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email: email });

        if (!user || user.password !== password) {
            return res.status(401).send("Invalid credentials");
        }

        const token = jwt.sign({
            id: user._id,
            name: user.name,
            role: user.role
        }, SECRETKEY, { expiresIn: "1 hour" });

        res.send({ token });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send("Internal Server Error");
    }
});

// Apply authMW for routes that require authentication
app.post("/create-lecture", authMW, (req, res) => {
    res.send("Lecture created");
});

app.post("/get-lecture", authMW, (req, res) => {
    res.send("Lectures");
});

app.post("/delete-lecture/:id", authMW, (req, res) => {
    res.send("Lecture deleted");
});

app.post("/update-lecture/:id", authMW, (req, res) => {
    res.send("Lecture updated");
});

// app.listen(PORT, async () => {
//     await connection;
//     console.log("Database connected");
//     console.log(`http://localhost:${PORT}`);
// });
app.listen(PORT, async () => {
    try {
        await connection;
        console.log("Database connected");
        console.log(`Server running at http://localhost:${PORT}`);
    } catch (error) {
        console.error("Database connection failed:", error);
    }
});