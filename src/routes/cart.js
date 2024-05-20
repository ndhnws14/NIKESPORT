const express = require('express');
const router = express.Router();
const cartController = require('../app/controllers/CartController');
const requireLogin = require('../middlewares/authMiddleware')

router.get('/mycart',requireLogin, cartController.cart);
// Định nghĩa route POST để thêm sản phẩm vào giỏ hàng
router.post('/store_cart', cartController.store_cart);
// Route để xóa sản phẩm khỏi giỏ hàng
router.delete('/:id', cartController.delete);


module.exports = router;