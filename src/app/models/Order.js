const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    customerName: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true }, // Số điện thoại được lưu dưới dạng String
    products: [{ 
        image: { type: String, required: true },
        name: { type: String, required: true },
        size: { type: String, required: true },
        quantity: { type: Number, required: true },
        totalPrice: { type: Number, required: true }
    }],
    total: { type: Number, required: true },
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
