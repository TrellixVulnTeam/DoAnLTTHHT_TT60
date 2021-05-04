const express = require('express');
const router = express.Router();

const infoController = require('../app/controllers/InfoController')

router.get('/:detail', infoController.show)
router.get('/', infoController.news)

module.exports = router;