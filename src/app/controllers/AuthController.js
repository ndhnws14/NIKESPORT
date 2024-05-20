const User = require('../models/User');
const Cart = require('../models/Cart');
const Order = require('../models/Order');
const bcrypt = require('bcrypt');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');



class AuthController {
    //[GET] /login 
    login(req, res, next) {
        res.render('auth/login')
    }

    //[GET] /logout
    logout(req, res){
        // Xóa thông tin người dùng khỏi session
        if (req.session && req.session.user) {
            req.session.destroy(err => {
                if (err) {
                    console.error('Error destroying session:', err);
                    res.status(500).json({ message: 'Failed to log out' });
                } else {
                    res.clearCookie('sessionID'); // Xóa cookie sessionID nếu có
                    res.status(200).json({ message: 'Logged out successfully' });
                }
            });
        } else {
            // Người dùng chưa đăng nhập, trả về lỗi
            res.status(401).json({ message: 'User is not logged in' });
        }
    }

    //[GET] /forgot
    forgot(req, res, next) {
        res.render('auth/forgot')
    }

     //[POST] /signin
    async signin(req, res, next) {
        const { email, password } = req.body;

        try {
            // Tìm người dùng trong cơ sở dữ liệu bằng email
            const user = await User.findOne({ email: email });

            // Kiểm tra xem người dùng có tồn tại và mật khẩu hợp lệ không
            if (!user || !(await bcrypt.compare(password, user.password))) {
                // Đăng nhập không thành công, trả về thông báo lỗi
                return res.status(401).json({ message: 'Email hoặc mật khẩu không đúng.' });
            }

            // Đăng nhập thành công, lưu thông tin người dùng vào session hoặc cookie
            req.session.user = user;

            res.status(200).json({ message: 'Đăng nhập thành công!' });
        } catch (error) {
            console.error('Lỗi đăng nhập:', error);
            res.status(500).json({ message: 'Đăng nhập thất bại. Vui lòng thử lại sau.' });
        }
    }

    //[POST] /registerUser
    async registerUser (req, res){
        try {
            const { fullname, address, phone, email, password } = req.body;
    
            // Kiểm tra xem email đã được sử dụng chưa
            const existingUser = await User.findOne({ email: email });
            if (existingUser) {
                return res.status(400).json({ message: 'Email đã tồn tại. Vui lòng sử dụng email khác.' });
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);
    
            // Tạo một user mới
            const newUser = new User({
                fullname: fullname,
                address: address,
                phone: phone,
                email: email,
                password: hashedPassword,
            });
    
            // Lưu user vào cơ sở dữ liệu
            await newUser.save();
    
            res.status(201).json({ message: 'Đăng ký tài khoản thành công!' });
        } catch (error) {
            console.error('Đăng ký tài khoản thất bại:', error.message);
            res.status(500).json({ message: 'Đăng ký tài khoản thất bại. Vui lòng thử lại sau.' });
        }
    }
    //[get] /register
    register(req, res){
        res.render('auth/register')
    }

    //[GET] /changepw
    changepw(req, res, next) {
        res.render('auth/changepw')
    }

    //[GET] /account
    account(req, res, next) {
        const user = res.locals.user; // Truy cập thông tin người dùng
        res.render('auth/account', {
            user: user // Truyền thông tin người dùng vào view
        })
    }

    //[GET] /orderlist
    async orderlist(req, res, next) {
        await Order.find({})
        .then(orders => {
            res.render('auth/orderlist' ,{ 
                orders: mutipleMongooseToObject(orders)
            })
        })
        .catch(error => next(error))
    }

    //[GET] /details
    async details(req, res, next) {
        await Order.findById(req.params.id)
        .then(orders => {
            res.render('auth/details' ,{ 
                orders: mongooseToObject(orders)
            })
        })
        .catch(next)
    }

    //[GET] /check-auth
    check(req, res){
        if (req.session && req.session.user) {
            // Nếu có thông tin người dùng trong session, người dùng đã đăng nhập
            res.status(200).json({ authenticated: true, message: 'User is logged in' });
        } else {
            // Nếu không có thông tin người dùng trong session, người dùng chưa đăng nhậpp
            res.status(401).json({ authenticated: false, message: 'User is not logged in' });
        }
    }
}

module.exports = new AuthController();
