const Cart = require('../models/Cart');
const { mutipleMongooseToObject } = require('../../util/mongoose');


class CartController{
    //[GET] cart/mycart
    async cart(req, res, next) {
        await Cart.find({})
        .then(carts => {
            res.render('cart/mycart',{ 
                carts: mutipleMongooseToObject(carts)
            })
        })
        .catch(error => next(error))
    }

   // POST cart/store_cart
   async store_cart(req, res, next) {
        try {
            const { name, image, price, size, quantity } = req.body;
            // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng hay chưa
            const existingItem = await Cart.findOne({ name: name, size: size });

            if (existingItem) {
                // Nếu sản phẩm đã tồn tại, cập nhật số lượng
                existingItem.quantity += parseInt(quantity); // Cộng thêm số lượng mới vào số lượng hiện có
                existingItem.price += parseFloat(price) * quantity; // Cộng thêm tiền
                await existingItem.save(); // Lưu lại cập nhật

                return res.redirect('back'); // Chuyển hướng đến trang thông báo thành công
            } else {
                // Nếu sản phẩm chưa tồn tại, tạo một bản ghi mới
                const cartItem = new Cart({
                    name: name,
                    image: image,
                    price: price,
                    size: size,
                    quantity: quantity
                });
                cartItem.price = price*quantity;
                await cartItem.save(); // Lưu sản phẩm vào giỏ hàng
                return res.redirect('back'); // Chuyển hướng đến trang thông báo thành công
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    // DELETE cart/:id
    delete(req, res, next){
        Cart.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    
}

module.exports = new CartController();
