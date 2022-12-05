const express = require('express');
const { getBusiness, createBusiness } = require('../controllers/businessController.js');

const router = express.Router()

router.get('/getBusiness', getBusiness);
router.post('/createBusiness', createBusiness);

module.exports = router;