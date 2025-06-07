const express = require('express');
const router = express.Router();
const salesController = require('../controllers/sales.controller');
const validatorWithJoiMiddleware = require('../middleware/validatorWithJoi.middleware');
const salesSchemas = require('../validators/sales.schemas');

router.post('/',
    validatorWithJoiMiddleware(salesSchemas),   
    salesController.createSales);
router.get('/', salesController.getAllSales);
router.put('/:id', 
    validatorWithJoiMiddleware(salesSchemas), 
    salesController.updateSales);
router.delete('/:id', salesController.deleteSales);
router.get('/:id', salesController.getSalesById);

module.exports = router;