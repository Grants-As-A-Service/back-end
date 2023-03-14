const express = require('express');
const { getGoverment, createGovernment } = require('../controllers/governmentController.js');

const router = express.Router()

router.get('/', getGoverment);
router.post('/create', createGovernment);

module.exports = router;