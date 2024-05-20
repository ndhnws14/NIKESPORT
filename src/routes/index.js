
const siteRoute = require('./site');
const cartRoute = require('./cart');
const orderRoute = require('./order');
const authRoute = require('./auth');
const adminRoute = require('./admin');
const nikemercurialtRoute = require('./nikemercurial');
const niketempoRoute = require('./niketempo');
const nikesuperflyRoute = require('./nikesuperfly');
const nikephantomRoute = require('./nikephantom');
const nikevicRoute = require('./nikevic');

function route(app) {
    app.use('/order', orderRoute);
    app.use('/cart', cartRoute);
    app.use('/auth', authRoute);
    app.use('/admin', adminRoute);
    app.use('/nikemercurial', nikemercurialtRoute);
    app.use('/niketempo', niketempoRoute);
    app.use('/nikesuperfly', nikesuperflyRoute);
    app.use('/nikephantom', nikephantomRoute);
    app.use('/nikevic', nikevicRoute);
    app.use('/', siteRoute);
}

module.exports = route;
