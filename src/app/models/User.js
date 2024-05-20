const mongoose = require('mongoose')
const validator = require('validator')
const slug = require('mongoose-slug-generator')


mongoose.plugin(slug)

const Schema = mongoose.Schema;

const User = new Schema({
    fullname: { 
        type: String,
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
    },
    email: { 
        type: String,
        require: true,
    }, 
    password: { 
        type: String,
        require: true,
    },
    isAdmin: { type: Boolean, default: false } // Trường vai trò của người dùng
}, {
    timestamps: true,
});


module.exports = mongoose.model('User', User);