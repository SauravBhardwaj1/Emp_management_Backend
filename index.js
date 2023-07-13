const express = require('express')
const { userRoutes } = require('./Routes/User.Route')
const { connection } = require('./Config/db')
require("dotenv").config()

const app = express()


app.use(express.json())

app.use("/user",userRoutes())

app.use("/emp",empRoutes());



app.listen(process.env.PORT, async()=>{
    try {
        await connection
        console.log("Connected to DB server")

    } catch (error) {
        console.log(error)
    }
    console.log(`server is running at ${process.env.PORT}`)
})