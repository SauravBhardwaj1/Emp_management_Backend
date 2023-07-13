const express = require('express')
var cors = require('cors')
const { userRoutes } = require('./Routes/User.Route')
const { connection } = require('./Config/db')
const { empRoutes } = require('./Routes/Employee.route')
require('dotenv').config()

const app = express()


app.use(express.json())
app.use(cors())

app.use("/user",userRoutes)

app.use("/emp",empRoutes);



app.listen(process.env.PORT, async(req,res)=>{
    try {
        await connection
        console.log("Connected to DB server")

    } catch (error) {
        console.log(error.message)
    }
    console.log(`server is running at ${process.env.PORT}`)
})