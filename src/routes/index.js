const newsRouter = require('./news')
const siteRouter = require('./sites')
const coursesRouter = require('./course-detail')
const route = (app) => {
     
    app.use('/courses', coursesRouter);
    app.use('/news', newsRouter);
    app.use('/', siteRouter);

}
module.exports = route;
