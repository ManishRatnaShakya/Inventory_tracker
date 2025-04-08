const express = require('express');
const router = express.Router();
const salesController = require('../controllers/sales.controller')

router.post('/', salesController.createSales);
router.get('/', salesController.getAllSales);
router.put('/:id', salesController.updateSales);
router.delete('/:id', salesController.deleteSales);
router.get('/:id', salesController.getSalesById);

module.exports = router;