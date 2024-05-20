const express = require('express');
const router = express.Router();
const nikesuperflyController = require('../app/controllers/NikeSuperflyController');
const requireLogin = require('../middlewares/authMiddleware');

router.get('/superfly', requireLogin, nikesuperflyController.index);
router.get('/:slug', requireLogin, nikesuperflyController.show);

module.exports = router;