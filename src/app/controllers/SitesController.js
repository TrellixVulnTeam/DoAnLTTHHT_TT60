const Course = require('../modells/Course')
const { fetchCourses } = require('../../services')
class SitesController {
    // [GET] /
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: fetchCourses(courses)
                })
            })
            .catch(next)
    }
    // [GET /search]
    search(req, res) {
        res.render('search')
    }
}
module.exports = new SitesController;
