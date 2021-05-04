const express = require('express');
const router = express.Router();

const adminControllers = require('../app/controllers/AdminControllers')

router.get('/', adminControllers.news)

module.exports = router;