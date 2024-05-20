const Order = require('../models/Order');
const Cart = require('../models/Cart');

const { mutipleMongooseToObject } = require('../../util/mongoose');


class OrderController{
   // POST order/store_order
   async store_order(req, res, next) {
        try {
            const { customername, address, phone, total } = req.body;
            const products = req.body.products; // Lấy danh sách sản phẩm từ body request

            // Tạo đơn hàng mới
            const order = new Order({
                customerName: customername,
                address: address,
                phone: phone,
                total: total,
                products: products
            });

            // Lưu đơn hàng vào cơ sở dữ liệu
            await order.save();

            await Cart.deleteMany();

            // Trả về thông báo thành công
            res.status(201).send('Đơn hàng đã được đặt hàng thành công.');
        } catch (error) {
            // Xử lý lỗi nếu có
            console.error('Error saving order:', error);
            res.status(500).send('Đã xảy ra lỗi khi lưu đơn hàng.');
        }
    }
}

module.exports = new OrderController();
