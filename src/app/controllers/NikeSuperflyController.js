const NikeSuperfly = require('../models/NikeSuperfly');
const { mutipleMongooseToObject } = require('../../util/mongoose')
const { mongooseToObject } = require('../../util/mongoose')

class NikeSuperflyController {

    //[GET] /superfly
    async index(req, res) {
        await NikeSuperfly.find({})
            .then(nikesuperflys => {
                res.render('nikesuperfly/superfly', { 
                    nikesuperflys: mutipleMongooseToObject(nikesuperflys)
                })
            })
            .catch(error => next(error))
    }

    //[GET] /nikesuperfly/:slug
    show(req, res, next) {
        NikeSuperfly.findOne({ slug: req.params.slug })
            .then(nikesuperflys => {
                res.render('nikesuperfly/show', { nikesuperflys: mongooseToObject(nikesuperflys) })
            })
            .catch(next)
    }
}

module.exports = new NikeSuperflyController();