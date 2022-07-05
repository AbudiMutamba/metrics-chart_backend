const asyncHandler = require('express-async-handler')

const User_data = require('../models/user_data')
// @desc    Get user analytics
// @route   GET/user_data

const { throws } = require("assert")
const { globalAgent } = require('http')

// @access  Private
const getUser_data = asyncHandler(async (req, res) => {

    const users_data = await User_data.find()
    res.status(200).json(users_data)
})

// @desc    Post user analytics
// @route   POST/user_data 
// @access  Private
const postUser_data = asyncHandler(async(req, res) => {
    if (!req.body.name) {
        res.status(400)
        throw new Error('Name not provided.');
    }

    if (!req.body.active_user) {
        res.status(400)
        throw new Error('Active member not provided');
    }

    const { name, active_user } = req.body

    const users_data = await User_data.create({
        name,
        active_user     
    })
    res.status(200).json(users_data)
})


// @desc    Update user analytics
// @route   PUT/user_data/:id
// @access  Private
const updateUser_data = asyncHandler(async(req, res) => {

    // const { name, active_user } = req.body
    // const users_data = await User_data.findById({name,
    //     active_user}) 

    const users_data = await User_data.findById(req.params.id)

    if(!users_data) {
        res.status(400)
        throw new Error('User not found')
    }

    // const updatedusers_data = await User_data.findByIdAndUpdate({
    //     name,
    //     active_user
    // })
    const updatedusers_data = await User_data.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
    })
    res.status(200).json(updatedusers_data)
})

// @desc    delete user analytics
// @route   DELETE/user_data/:id
// @access  Private
const deleteUser_data = asyncHandler(async (req, res) => {
    const users_data = await User_data.findById(req.params.id)

    if(!users_data) {
        res.status(400)
        throw new Error('User not found')
    }

    await User_data.remove()
    res.status(200).json({ id: req.params.id})
})

module.exports = {
    getUser_data,
    postUser_data,
    updateUser_data,
    deleteUser_data
}