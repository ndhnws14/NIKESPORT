const express = require('express');
const router = express.Router();
const nikemercurialController = require('../app/controllers/NikeMercurialController');
const requireLogin = require('../middlewares/authMiddleware');

router.get('/mercurial', requireLogin, nikemercurialController.index);
router.get('/:slug', requireLogin, nikemercurialController.show);

module.exports = router;