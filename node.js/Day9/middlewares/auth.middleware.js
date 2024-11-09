const jwt = require("jsonwebtoken");
const SECRETKEY = "HABHAITUHIHE"; 
const authMW = (req,res,next) => {
    const tokenholder = req.headers.authorization;
    if(!tokenholder){
        return res.status(401).send("Unauthorized");
    }
    const tokenvalue = tokenheader.split(" ")[1];

    try{
        const decoded =jwt.verify(tokenvalue, SECRETKEY);
        next();

    }
    catch(e){
        return res.status(401).send("Invalid token")
    }
}

module.exports = authMW;