const Course = require('../modells/Course')
const { fetchCourses } = require('../../services')
class AdminControllers {
    // [GET] /admin
    news(req, res) {
        Course.find({})
            .then(courses => {
                res.render('admin', {
                    courses: fetchCourses(courses)
                });
            })
            .catch()
    }

}
module.exports = new AdminControllers;
