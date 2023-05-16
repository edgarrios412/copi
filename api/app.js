const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const app = express()

app.use(morgan("dev"))
app.use(cors())

app.get("/test", (req,res) => {
    res.send("Hola mundo")
})

app.listen(3000,() => {
    console.log("Server listening on port 3000")
})