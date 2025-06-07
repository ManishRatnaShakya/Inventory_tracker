const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplier.controller');
const validatorWithJoiMiddleware = require('../middleware/validatorWithJoi.middleware');
const supplierSchemas = require('../validators/supplier.schemas')

router.post('/', 
    validatorWithJoiMiddleware(supplierSchemas),
    supplierController.createSupplier);
router.get('/', supplierController.getAllSupplier);
router.put('/:id', supplierController.updateSupplier);
router.delete('/:id', supplierController.deleteSupplier);
router.get('/:id', supplierController.getSupplierById);

module.exports = router;