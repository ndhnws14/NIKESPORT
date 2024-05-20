const NikeVic = require('../models/NikeVic');
const { mutipleMongooseToObject } = require('../../util/mongoose')
const { mongooseToObject } = require('../../util/mongoose')

class NikeVicController {
    //[GET] /vic
    async index(req, res) {
        await NikeVic.find({})
            .then(nikevics => {
                res.render('nikevic/vic', { 
                    nikevics: mutipleMongooseToObject(nikevics)
                })
            })
            .catch(error => next(error))
    }

    //[GET] /nikevic/:slug
    show(req, res, next) {
        NikeVic.findOne({ slug: req.params.slug })
            .then(nikevics => {
                res.render('nikevic/show', { nikevics: mongooseToObject(nikevics) })
            })
            .catch(next)
    }
}

module.exports = new NikeVicController();