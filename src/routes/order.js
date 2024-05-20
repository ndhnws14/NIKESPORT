const express = require('express');
const router = express.Router();
const orderController = require('../app/controllers/OrderController');


router.post('/store_order', orderController.store_order);



module.exports = router;