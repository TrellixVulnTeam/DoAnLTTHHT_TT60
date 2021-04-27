const Course = require('../modells/Course')
const { findOneCourse } = require('../../services')
class CourseController {
    // [GET] /courses/:path
    show(req, res, next) {
        Course.findOne({ path: req.params.path })
            .then(course => {
                res.render('courses/detail', { course: findOneCourse(course) })
            })
            .catch(next);
    }
    // GET /courses/store
    create(req, res, next) {
        res.render('courses/create')
    }
    // POST /courses/store
    store(req, res, next) {
        const formData = req.body; 
        formData.image = `https://img.youtube.com/vi/${formData.videoID}/sddefault.jpg`
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/'))
            .catch(error=>{
                console.log(error);
            })
    }
}
module.exports = new CourseController;
