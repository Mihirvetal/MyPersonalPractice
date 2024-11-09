const nodemailer = require("nodemailer");

const username = "clemens.mclaughlin@ethereal.email";
const password = "Q1cBUudppEGgjk68vf";
const transporter= nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port : 587,
    auth: {
        user: username,
        pass: password
    }

})
const mail= {
    from: "mihirvetal@gmail.com",
    to: "pc234rf@gmail.com",
    subject: "hello",
    text: "bhai "
}

transporter.sendMail(mail, (err, info)=>{
    if (err){
        return console.log("error",err);
    }
    console.log("object" + info.response);
})