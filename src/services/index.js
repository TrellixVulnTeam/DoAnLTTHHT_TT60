module.exports = {
    fetchCourses: function (item) {
        return item.map(item => item.toObject())
    },
    findOneCourse: function (item) {
        return item ? item.toObject() : item
    }
}