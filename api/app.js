const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const app = express()

app.use(morgan("dev"))
app.use(cors())

app.get("/test", (req,res) => {
    res.send("Hola mundo")
})

const nodemailer = require("nodemailer");

app.get("/send" , async (req,res) =>{
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "edgarrios412@gmail.com", // generated ethereal user
      pass: "jejntqqvrabnfhan", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "edgarrios412@gmail.com", // list of receivers
    subject: "Bienvenido a COPI", // Subject line
    text: "Hello world?", // plain text body
    html: "<h1>Hello world?</h1>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
})


app.listen(3000,() => {
    console.log("Server listening on port 3000")
})