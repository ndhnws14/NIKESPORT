const NikeTempo = require('../models/NikeTempo');
const { mutipleMongooseToObject } = require('../../util/mongoose')
const { mongooseToObject } = require('../../util/mongoose')

class NikeTempoController {
    //[GET] /tempo
    async index(req, res) {

        await NikeTempo.find({})
            .then(niketempos => {

                res.render('niketempo/tempo', { 
                    niketempos: mutipleMongooseToObject(niketempos)
                })
            })
            .catch(error => next(error))

    }

    //[GET] /niketempo/:slug
    show(req, res, next) {
        NikeTempo.findOne({ slug: req.params.slug })
            .then(niketempos => {
                res.render('niketempo/show', { niketempos: mongooseToObject(niketempos) })
            })
            .catch(next)
    }
}

module.exports = new NikeTempoController();