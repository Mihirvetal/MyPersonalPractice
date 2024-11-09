const nodemailer = require("nodemailer")

const username = "coby16@ethereal.email"
const password = "rgFU2kReeGfaTjkYR4"

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.email',
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

//   transporter.sendMail(mailOptions2, (error, info) => {
//     if (error) {
//       return console.log(error);
//     }
//     console.log('Email sent: ' + info.response);
//   });