const express = require('express');
const router = express.Router();
const nikevicController = require('../app/controllers/NikeVicController');
const requireLogin = require('../middlewares/authMiddleware')

router.get('/vic', requireLogin, nikevicController.index);
router.get('/:slug', requireLogin, nikevicController.show);

module.exports = router;