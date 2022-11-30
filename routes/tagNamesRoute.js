const express = require('express');
const { getTagNames } = require('../controllers/tagNamesController.js');

const router = express.Router()

router.get('/getAll', getTagNames);

module.exports = router;