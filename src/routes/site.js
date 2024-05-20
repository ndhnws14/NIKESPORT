const express = require('express');
const router = express.Router();
const SiteController = require('../app/controllers/SiteController');
const requireLogin = require('../middlewares/authMiddleware');

// Sử dụng hàm callback làm tham số cho router.get()
router.get('/',requireLogin, SiteController.index);

module.exports = router;
