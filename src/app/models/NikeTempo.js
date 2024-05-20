const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')


mongoose.plugin(slug)

const Schema = mongoose.Schema;

const NikeTempo = new Schema({
    name: { type: String },
    price: { type: Number},
    description: { type: String },
    image: { type: String },
    size: { type: String },
    totalproduct: { type: Number },
    slug: { type: String, slug: 'name', unique: true }
}, {
    timestamps: true,
});


module.exports = mongoose.model('NikeTempo', NikeTempo);