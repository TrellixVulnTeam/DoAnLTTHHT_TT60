const express = require('express');
const router = express.Router();

const newsControllers = require('../app/controllers/NewsControllers')

router.get('/:detail', newsControllers.show)
router.get('/', newsControllers.news)

module.exports = router;