const mongoose = require('mongoose')

const userdata_Schema = mongoose.Schema({

    name: {
        type: String,
    },
    active_user : {
        type: Number
    }
}, {
    timestaps: true
})

module.exports =  mongoose.model('User_data', userdata_Schema)