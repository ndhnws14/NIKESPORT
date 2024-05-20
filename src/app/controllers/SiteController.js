const NikeMercurial = require('../models/NikeMercurial');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    async index(req, res) {

        // Truy vấn dữ liệu từ database (ví dụ: NikeMercurial)
        try {
            const nikemercurials = await NikeMercurial.find({});
            res.render('home', {
                nikemercurials: mutipleMongooseToObject(nikemercurials),
            });
        } catch (error) {
            console.error('Error fetching Nike Mercurial data:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}

module.exports = new SiteController(); // Export một instance của SiteController
