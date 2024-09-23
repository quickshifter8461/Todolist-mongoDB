const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"Name is Required"],
        trim: true,
    },
    description:{
        type: String,
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    },
    data:{
        type: Date,
        default: Date.now
    }
})

const Todo = mongoose.model('Todo',todoSchema)

module.exports = Todo