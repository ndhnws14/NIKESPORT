const express = require('express');
const router = express.Router();
const niketempoController = require('../app/controllers/NikeTempoController');
const requireLogin = require('../middlewares/authMiddleware');

router.get('/tempo', requireLogin, niketempoController.index);
router.get('/:slug', requireLogin, niketempoController.show);

module.exports = router;