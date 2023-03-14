const express = require('express');
const { getBusiness, createBusiness } = require('../controllers/businessController.js');

const router = express.Router()

router.get('/', getBusiness);
router.post('/create', createBusiness);

module.exports = router;