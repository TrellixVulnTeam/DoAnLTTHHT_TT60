const adminRouter = require('./admin')
const siteRouter = require('./sites')
const coursesRouter = require('./course-detail')
const infoRouter = require('./info')
const route = (app) => {
     
    app.use('/courses', coursesRouter);
    app.use('/info', infoRouter)
    app.use('/admin', adminRouter);
    app.use('/', siteRouter);

}
module.exports = route;
