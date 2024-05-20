const NikeMercurial = require('../models/NikeMercurial');
const { mutipleMongooseToObject } = require('../../util/mongoose')
const { mongooseToObject } = require('../../util/mongoose')

class NikeMercurialController {
    //[GET] /mercurial
    async index(req, res) {

        await NikeMercurial.find({})
            .then(nikemercurials => {

                res.render('nikemercurial/mercurial', { 
                    nikemercurials: mutipleMongooseToObject(nikemercurials)
                })
            })
            .catch(error => next(error))

    }

    //[GET] /nikemercurial/:slug
    show(req, res, next) {
        NikeMercurial.findOne({ slug: req.params.slug })
            .then(nikemercurials => {
                res.render('nikemercurial/show', { nikemercurials: mongooseToObject(nikemercurials) })
            })
            .catch(next)
    }

}

module.exports = new NikeMercurialController();