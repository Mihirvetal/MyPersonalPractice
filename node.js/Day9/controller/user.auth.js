const userModel = require('../models/user.model')
const jwt = require("jsonwebtoken")

const login = async (req, res) => {
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
}

const signup = async (req,res)=>{
    const body = req.body;
    const user = userModel.insertMany({body})
}

module.exports = {login, signup}






