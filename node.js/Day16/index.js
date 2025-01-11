const nodemailer = require("nodemailer")

const username = "olaf.bauch@ethereal.email"
const password = "Vtn9tb8h7w1qWCyGH6"

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: username,
        pass: password
    }
});

const mailOptions = {
    from: 'coby16@ethereal.email',
    to: 'pc732001@gmail.com',
    subject: 'Test Email',
    text: 'This is a test email sent using Nodemailer!'
  };
  
//   const mailOptions2 = {
//     from: 'coby16@ethereal.email',
//     to: 'masaischool@gmail.com',
//     subject: 'Test Email',
//     text: 'This is a test email sent using Nodemailer!'
//   };

  
  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Email sent: ' + info.response);
  });


  
// ====================================================================================


//   transporter.sendMail(mailOptions2, (error, info) => {
//     if (error) {
//       return console.log(error);
//     }
//     console.log('Email sent: ' + info.response);
//   });