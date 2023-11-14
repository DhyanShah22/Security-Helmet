const express = require('express')
const helmet = require('helmet')
require('dotenv').config()

const app = express()
app.use(helmet())

app.get("/api/", (req,res) => {
    res.send("<h1> Hello Helmet!</h1>")
})

app.listen(process.env.PORT, () => {
    console.log("App running on port ", process.env.PORT)
})