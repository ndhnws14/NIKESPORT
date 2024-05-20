const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')


mongoose.plugin(slug)

const Schema = mongoose.Schema;

const Cart = Schema({
    name: { type: String },
    price: { type: Number},
    image: { type: String },
    size: { type: Number },
    quantity: {type: Number},
}, {
    timestamps: true,
});


module.exports = mongoose.model('Cart', Cart);