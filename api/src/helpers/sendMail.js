const nodemailer = require("nodemailer");

module.exports = async (email) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: "edgarrios412@gmail.com", // generated ethereal user
          pass: process.env.GoogleAPI, // generated ethereal password
        },
      });
    
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: email, // list of receivers
        subject: "Bienvenido a COPI", // Subject line
        text: "Hello world?", // plain text body
        html: "<h1>Hello world?</h1>", // html body
      });
    
      console.log("Email enviado correctamente");
}