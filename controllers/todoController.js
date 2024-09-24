const Todo = require('../models/todoModel')

const createTodo = async (req,res)=>{
    try {
        const todo = await Todo.create(req.body)
        res.status(201).json(todo)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

const fetchTodo = async (req, res)=>{
    try {
        const todo = await Todo.find({})
        res.status(302).json(todo)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

const fetchTodoById = async (req, res)=>{
    try {
        const {id} = req.params
        const todo = await Todo.findById(id)
        res.status(302).json(todo)   
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

const editTodoById = async (req, res)=>{
    try {
        const {id} = req.params
        const todo = await Todo.findByIdAndUpdate(id, req.body,{new:true,runValidators:true})
        res.status(201).json(todo)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

const deleteTodo = async (req, res)=>{
    try {
        const {id}= req.params
        const todo = await Todo.findByIdAndDelete(id)
        res.status(201).json({message: "item Found and deleted"})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
module.exports = {
    createTodo,
    fetchTodo,
    fetchTodoById,
    editTodoById,
    deleteTodo
}