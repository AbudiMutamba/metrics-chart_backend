const asyncHandler = require('express-async-handler')
// @desc    Get user analytics
// @route   GET/user_data

const { throws } = require("assert")

// @access  Private
const getUser_data = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get user analytics"})
})

// @desc    Post user analytics
// @route   POST/user_data 
// @access  Private
const postUser_data = asyncHandler(async(req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Add user_data');
    }
    res.status(200).json({ message: "post user analytics"})
})


// @desc    Update user analytics
// @route   PUT/user_data/:id
// @access  Private
const updateUser_data = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Update user analytics ${req.params.id}`})
})

// @desc    delete user analytics
// @route   DELETE/user_data/:id
// @access  Private
const deleteUser_data = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update user analytics ${req.params.id}`})
})

module.exports = {
    getUser_data,
    postUser_data,
    updateUser_data,
    deleteUser_data
}