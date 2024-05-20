const express = require('express');
const router = express.Router();
const authController = require('../app/controllers/AuthController');
const requireLogin = require('../middlewares/authMiddleware');

router.get('/forgot',requireLogin, authController.forgot);
router.get('/changepw',requireLogin, authController.changepw);
router.get('/account',requireLogin, authController.account);
router.get('/orderlist',requireLogin, authController.orderlist);
router.get('/details/:id',requireLogin, authController.details);
router.get('/register', authController.register);
router.get('/login', authController.login);
router.get('/logout', authController.logout);
router.get('/check-auth', authController.check);
router.post('/signin', authController.signin);
router.post('/registerUser', authController.registerUser);

module.exports = router;