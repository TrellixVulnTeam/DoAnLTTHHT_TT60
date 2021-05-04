const Course = require('../modells/Course')
const { findOneCourse } = require('../../services')
const { fetchCourses } = require('../../services')
class CourseController {
    // [GET] /courses/:path
    show(req, res, next) {
        Course.findOne({ path: req.params.path })
            .then(course => {
                res.render('courses/detail', { course: findOneCourse(course) })
            })
            .catch(next);
    }
    search(req, res, next) {
        Course.find({ name: req.query.name })
            .then(course => {
                res.render('/search', { course: fetchCourses(course) })
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
            .catch(error => {
                console.log(error);
            })
    }
    // GET /courses/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit', { course: findOneCourse(course) }))
            .catch(next);

    }
    // PUT /courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/admin'))
            .catch(next)
    }
}
module.exports = new CourseController;
