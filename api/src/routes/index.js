const {Router} = require("express")
const sendMail = require("../helpers/sendMail.js")
const {User} = require("../db.js")

const router = Router();

router.get("/test", async (req,res) => {
    const newUser = await User.create({name:"edgar"})
    res.json(newUser)
})

router.get("/send" , async (req,res) =>{
  sendMail("soylavi412@gmail.com")
})

module.exports = router;