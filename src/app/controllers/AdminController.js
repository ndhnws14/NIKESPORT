const User = require('../models/User');
const Order = require('../models/Order');
const NikeMercurial = require('../models/NikeMercurial');
const NikePhantom = require('../models/NikePhantom');
const NikeSuperfly = require('../models/NikeSuperfly');
const NikeTempo = require('../models/NikeTempo');
const NikeVic = require('../models/NikeVic');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose')


class AdminController {
    //[GET] admin/index
    index(req, res, next) {
        res.render('admin/index')
    }

    //[GET] /account
    account_admin(req, res, next) {
        res.render('admin/account-admin')
    }

    //[GET] create
    create_mer(req, res, next) {
        res.render('admin/create-mer')
    }
    create_tem(req, res, next) {
        res.render('admin/create-tem')
    }
    create_sup(req, res, next) {
        res.render('admin/create-sup')
    }
    create_phan(req, res, next) {
        res.render('admin/create-phan')
    }
    create_vic(req, res, next) {
        res.render('admin/create-vic')
    }

    async store_mer(req, res, next) {
        try {
            const { name, price, description, image, size, totalproduct } = req.body;
            
            if (req.file) {
                image = req.file.filename;
            }

            const newNikeMercurial = new NikeMercurial({
                name: name,
                price: price,
                description: description,
                image: image,
                size: size,
                totalproduct: totalproduct
            });

            await newNikeMercurial.save();
    
            res.status(201).json({ message: 'Thêm sản phẩm thành công!' });
        } catch (error) {
            console.error('Thêm sản phẩm thất bại:', error.message);
            res.status(500).json({ message: 'Thêm sản phẩm thất bại. Vui lòng thử lại sau.' });
        }
    }
    
    async store_tem(req, res, next){
        try {
            const { name, price, description, size, totalproduct } = req.body;
    
            // Tạo một sp mới
            const newNikeTempo = new NikeTempo({
                name: name,
                price: price,
                description: description,
                size: size,
                totalproduct: totalproduct,
            });

            // Lưu đường dẫn hình ảnh vào cơ sở dữ liệu
            if (req.file) {
                newNikeTempo.image = req.file.filename;
            }
    
            // Lưu sp vào cơ sở dữ liệu
            await newNikeTempo.save();
    
            res.status(201).json({ message: 'Thêm sản phẩm thành công!' });
        } catch (error) {
            console.error('Thêm sản phẩm thất bại:', error.message);
            res.status(500).json({ message: 'Thêm sản phẩm thất bại. Vui lòng thử lại sau.' });
        }
    }
    async store_sup(req, res, next){
        try {
            const { name, price, description, size, totalproduct } = req.body;
    
            // Tạo một sp mới
            const newNikeSuperfly = new NikeSuperfly({
                name: name,
                price: price,
                description: description,
                size: size,
                totalproduct: totalproduct,
            });

            // Lưu đường dẫn hình ảnh vào cơ sở dữ liệu
            if (req.file) {
                newNikeSuperfly.image = req.file.filename;
            }
    
            // Lưu sp vào cơ sở dữ liệu
            await newNikeSuperfly.save();
    
            res.status(201).json({ message: 'Thêm sản phẩm thành công!' });
        } catch (error) {
            console.error('Thêm sản phẩm thất bại:', error.message);
            res.status(500).json({ message: 'Thêm sản phẩm thất bại. Vui lòng thử lại sau.' });
        }
    }
    async store_phan(req, res, next){
        try {
            const { name, price, description, size, totalproduct } = req.body;
    
            // Tạo một sp mới
            const newNikePhantom = new NikePhantom({
                name: name,
                price: price,
                description: description,
                size: size,
                totalproduct: totalproduct,
            });

            // Lưu đường dẫn hình ảnh vào cơ sở dữ liệu
            if (req.file) {
                newNikePhantom.image = req.file.filename;
            }
    
            // Lưu sp vào cơ sở dữ liệu
            await newNikePhantom.save();
    
            res.status(201).json({ message: 'Thêm sản phẩm thành công!' });
        } catch (error) {
            console.error('Thêm sản phẩm thất bại:', error.message);
            res.status(500).json({ message: 'Thêm sản phẩm thất bại. Vui lòng thử lại sau.' });
        }
    }
    async store_vic(req, res, next){
        try {
            const { name, price, description, size, totalproduct } = req.body;
            
            // Tạo một sp mới
            const newNikeVic = new NikeVic({
                name: name,
                price: price,
                description: description,
                size: size,
                totalproduct: totalproduct,
            });

            // Lưu đường dẫn hình ảnh vào cơ sở dữ liệu
            if (req.file) {
                newNikeVic.image = req.file.filename;
            }
    
            // Lưu sp vào cơ sở dữ liệu
            await newNikeVic.save();
            console.log(newNikeVic)
    
            res.status(201).json({ message: 'Thêm sản phẩm thành công!' });
        } catch (error) {
            console.error('Thêm sản phẩm thất bại:', error.message);
            res.status(500).json({ message: 'Thêm sản phẩm thất bại. Vui lòng thử lại sau.' });
        }
    }

    //[GET] /warehouse
    async warehouses_mer(req, res) {

        await NikeMercurial.find({})
            .then(nikemercurials => {

                res.render('admin/warehouses-mer', { 
                    nikemercurials: mutipleMongooseToObject(nikemercurials)
                })
            })
            .catch(error => next(error))
    }

    async warehouses_phan(req, res) {
        await NikePhantom.find({})
            .then(nikephantoms => {
                res.render('admin/warehouses-phan', { 
                    nikephantoms: mutipleMongooseToObject(nikephantoms)
                })
            })
            .catch(error => next(error))
    }

    async warehouses_sup(req, res) {
        await NikeSuperfly.find({})
            .then(nikesuperflys => {
                res.render('admin/warehouses-sup', { 
                    nikesuperflys: mutipleMongooseToObject(nikesuperflys)
                })
            })
            .catch(error => next(error))
    }

    async warehouses_tem(req, res) {

        await NikeTempo.find({})
            .then(niketempos => {

                res.render('admin/warehouses-tem', { 
                    niketempos: mutipleMongooseToObject(niketempos)
                })
            })
            .catch(error => next(error))

    }

    async warehouses_vic(req, res) {
        await NikeVic.find({})
            .then(nikevics => {
                res.render('admin/warehouses-vic', { 
                    nikevics: mutipleMongooseToObject(nikevics)
                })
            })
            .catch(error => next(error))
    }
    
   
    // DELETE admin/:id
    delete_mer(req, res, next){
        NikeMercurial.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    delete_phan(req, res, next){
        NikePhantom.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    delete_tem(req, res, next){
        NikeTempo.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    delete_sup(req, res, next){
        NikeSuperfly.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    delete_vic(req, res, next){
        NikeVic.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //[GET] edit
    edit_vic(req, res, next){
        NikeVic.findById( req.params.id )
            .then(nikevics =>res.render('admin/edit-vic', {
                nikevics: mongooseToObject(nikevics)
            }))
            .catch(next)
    }

    edit_tem(req, res, next){
        NikeTempo.findById( req.params.id )
            .then(niketempos =>res.render('admin/edit-tem', {
                niketempos: mongooseToObject(niketempos)
            }))
            .catch(next)
    }

    edit_sup(req, res, next){
        NikeSuperfly.findById( req.params.id )
            .then(nikesuperflys =>res.render('admin/edit-sup', {
                nikesuperflys: mongooseToObject(nikesuperflys)
            }))
            .catch(next)
    }

    edit_phan(req, res, next){
        NikePhantom.findById( req.params.id )
            .then(nikephantoms =>res.render('admin/edit-phan', {
                nikephantoms: mongooseToObject(nikephantoms)
            }))
            .catch(next)
    }

    edit_mer(req, res, next){
        NikeMercurial.findById( req.params.id )
            .then(nikemercurials =>res.render('admin/edit-mer', {
                nikemercurials: mongooseToObject(nikemercurials)
            }))
            .catch(next)
    }

    //[PUT] update
    update_vic(req, res, next){
        NikeVic.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/admin/warehouses-vic'))
            .catch(next)
    }

    update_tem(req, res, next){
        NikeTempo.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/admin/warehouses-tem'))
            .catch(next)
    }

    update_sup(req, res, next){
        NikeSuperfly.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/admin/warehouses-sup'))
            .catch(next)
    }

    update_phan(req, res, next){
        NikePhantom.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/admin/warehouses-phan'))
            .catch(next)
    }

    update_mer(req, res, next){
        NikeMercurial.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/admin/warehouses-mer'))
            .catch(next)
    }
    //[GET] /orderlist
    async orderlist(req, res, next) {
        await Order.find({})
        .then(orders => {
            res.render('admin/orderlist' ,{ 
                orders: mutipleMongooseToObject(orders)
            })
        })
        .catch(error => next(error))
    }

    //[GET] /details
    async details(req, res, next) {
        await Order.findById(req.params.id)
        .then(orders => {
            res.render('admin/details' ,{ 
                orders: mongooseToObject(orders)
            })
        })
        .catch(next)
    }

    //[GET] /info-customer
    async info(req, res, next) {
        await User.find({})
        .then(users => {
            res.render('admin/info-customer' ,{ 
                users: mutipleMongooseToObject(users)
            })
        })
        .catch(error => next(error))
    }

    //[get] /add
    add(req, res){
        res.render('admin/add-user')
    }

    async add_user(req, res){
        try {
            const { fullname, address, phone, email} = req.body;
    
            // Kiểm tra xem email đã được sử dụng chưa
            const existingUser = await User.findOne({ email: email });
            if (existingUser) {
                return res.status(400).json({ message: 'Email đã tồn tại. Vui lòng sử dụng email khác.' });
            }

            // Tạo một user mới
            const newUser = new User({
                fullname: fullname,
                address: address,
                phone: phone,
                email: email,
                password: "12345678",
            });
    
            // Lưu user vào cơ sở dữ liệu
            await newUser.save();
    
            res.status(201).json({ message: 'Thêm tài khoản thành công!' });
        } catch (error) {
            console.error('Thêm tài khoản thất bại:', error.message);
            res.status(500).json({ message: 'Thêm tài khoản thất bại. Vui lòng thử lại sau.' });
        }
    }

    //[GET] edit-user/:id
    edit(req, res, next){
        User.findById( req.params.id )
            .then(users =>res.render('admin/edit-user', {
                users: mongooseToObject(users)
            }))
            .catch(next)
    }

    //[PUT] update
    update(req, res, next){
        User.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/admin/info-customer'))
            .catch(next)
    }
    //[DELETE] delete user
    delete(req, res, next){
        User.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

}

module.exports = new AdminController();
