const express = require('express');
const router = express.Router();
const salesController = require('../controllers/sales.controller')

router.post('/', salesController.createSales);
router.get('/', salesController.getAllSales);

module.exports = router;