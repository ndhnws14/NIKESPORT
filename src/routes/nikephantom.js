const express = require('express');
const router = express.Router();
const nikephantomController = require('../app/controllers/NikePhantomController');
const requireLogin = require('../middlewares/authMiddleware');

router.get('/phantom', requireLogin, nikephantomController.index);
router.get('/:slug', requireLogin, nikephantomController.show);

module.exports = router;