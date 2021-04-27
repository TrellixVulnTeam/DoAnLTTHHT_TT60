const express = require('express');
const router = express.Router();

const courseControllers = require('../app/controllers/CourseController')

router.get('/create', courseControllers.create)
router.post('/store', courseControllers.store)
router.get('/:path', courseControllers.show)

module.exports = router;