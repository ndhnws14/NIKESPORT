const express = require('express');
const router = express.Router();
const adminController = require('../app/controllers/AdminController');
const requireLogin = require('../middlewares/authMiddleware');
const upload = require('../middlewares/uploadMiddleware');
// const csrf = require('csurf');
// const csrfProtection = csrf();

// router.use(csrfProtection);



router.get('/index', requireLogin, adminController.index);
router.get('/account-admin', requireLogin, adminController.account_admin);
router.get('/orderlist', requireLogin, adminController.orderlist);
router.get('/details/:id', requireLogin, adminController.details);
router.get('/edit-user/:id', requireLogin, adminController.edit);
router.put('/data-user/:id', adminController.update);
router.get('/info-customer', requireLogin, adminController.info);
router.get('/add-user', requireLogin, adminController.add);
router.post('/add', adminController.add_user);
router.delete('/customer/:id', adminController.delete);

//Quản lý kho
router.get('/warehouses-mer', requireLogin,adminController.warehouses_mer);
router.get('/warehouses-tem', requireLogin,adminController.warehouses_tem);
router.get('/warehouses-sup', requireLogin,adminController.warehouses_sup);
router.get('/warehouses-phan', requireLogin,adminController.warehouses_phan);
router.get('/warehouses-vic', requireLogin,adminController.warehouses_vic);
//Thêm sản phẩm vào kho
router.get('/create-mer', requireLogin, adminController.create_mer);
router.get('/create-tem', requireLogin, adminController.create_tem);
router.get('/create-sup', requireLogin, adminController.create_sup);
router.get('/create-phan', requireLogin, adminController.create_phan);
router.get('/create-vic', requireLogin, adminController.create_vic);
router.post('/store-mer', upload.single('image'), adminController.store_mer);
router.post('/store-tem', upload.single('image'), adminController.store_tem);
router.post('/store-sup', upload.single('image'), adminController.store_sup);
router.post('/store-phan', upload.single('image'), adminController.store_phan);
router.post('/store-vic', upload.single('image'), adminController.store_vic);
// Xóa saen phẩm khỏi kho
router.delete('/nikemercurials/:id', adminController.delete_mer);
router.delete('/nikephantoms/:id', adminController.delete_phan);
router.delete('/niketempos/:id', adminController.delete_tem);
router.delete('/nikesuperflys/:id', adminController.delete_sup);
router.delete('/nikevics/:id', adminController.delete_vic);
// Cập nhật kho
router.get('/:id/edit-vic', requireLogin, adminController.edit_vic);
router.get('/:id/edit-tem', requireLogin, adminController.edit_tem);
router.get('/:id/edit-sup', requireLogin, adminController.edit_sup);
router.get('/:id/edit-phan', requireLogin, adminController.edit_phan);
router.get('/:id/edit-mer', requireLogin, adminController.edit_mer);
router.put('/store-vic/:id', adminController.update_vic);
router.put('/store-tem/:id', adminController.update_tem);
router.put('/store-sup/:id', adminController.update_sup);
router.put('/store-phan/:id', adminController.update_phan);
router.put('/store-mer/:id', adminController.update_mer);


module.exports = router;