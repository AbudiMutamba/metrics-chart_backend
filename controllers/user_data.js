// @desc    Get user analytics
// @route   GET/user_data
// @access  Private
const getUser_data = (req, res) => {
    res.status(200).json({ message: "Get user analytics"})
}

// @desc    Post user analytics
// @route   POST/user_data 
// @access  Private
const postUser_data = (req, res) => {
    console.log(req.body)
    res.status(200).json({ message: "post user analytics"})
}


// @desc    Update user analytics
// @route   PUT/user_data/:id
// @access  Private
const updateUser_data = (req, res) => {
    res.status(200).json({ message: `Update user analytics ${req.params.id}`})
}

// @desc    delete user analytics
// @route   DELETE/user_data/:id
// @access  Private
const deleteUser_data = (req, res) => {
    res.status(200).json({ message: `Update user analytics ${req.params.id}`})
}

module.exports = {
    getUser_data,
    postUser_data,
    updateUser_data,
    deleteUser_data
}