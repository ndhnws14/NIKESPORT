// authMiddleware.js
const requireLogin = (req, res, next) => {
    if (req.session && req.session.user) {
        // Nếu có thông tin người dùng trong session, gán vào biến res.locals
        res.locals.user = req.session.user;
    }
    // Tiếp tục thực hiện middleware nếu người dùng đã đăng nhập hoặc đang truy cập các route public
    next();
};

module.exports = requireLogin;

