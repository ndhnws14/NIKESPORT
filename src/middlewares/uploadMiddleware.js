// middlewares/upload.js

const multer = require('multer');
const path = require('path');

// Thiết lập cấu hình lưu trữ file
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '/../../public/uploads'));
    },
    filename: (req, file, cb) => {
        const filename = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
        cb(null, filename);
    }
});

// Khởi tạo middleware multer
const upload = multer({ 
    storage: storage,
});

module.exports = upload;