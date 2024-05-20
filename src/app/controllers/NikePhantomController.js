const NikePhantom = require('../models/NikePhantom');
const { mutipleMongooseToObject } = require('../../util/mongoose')
const { mongooseToObject } = require('../../util/mongoose')

class NikePhantomController {
    //[GET] /phantom
    async index(req, res) {
        await NikePhantom.find({})
            .then(nikephantoms => {
                res.render('nikephantom/phantom', { 
                    nikephantoms: mutipleMongooseToObject(nikephantoms)
                })
            })
            .catch(error => next(error))
    }

    //[GET] /nikemercurial/:slug
    show(req, res, next) {
        NikePhantom.findOne({ slug: req.params.slug })
            .then(nikephantoms => {
                res.render('nikephantom/show', { nikephantoms: mongooseToObject(nikephantoms) })
            })
            .catch(next)
    }
}

module.exports = new NikePhantomController();