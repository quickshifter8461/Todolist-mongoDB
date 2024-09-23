const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3000
const connectDB = require('./db')
const todoRouter = require('./routes/todoRouter')



connectDB()


app.get('/',(req,res)=>{
    res.send("Welcome to Todolist")
})

app.use(express.json())

app.use('/api',todoRouter)

app.listen(port,()=>{
    console.log(`server up and running on port ${port}`)
})