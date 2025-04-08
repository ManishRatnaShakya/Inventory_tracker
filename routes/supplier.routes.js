const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplier.controller')

router.post('/', supplierController.createSupplier);
router.get('/', supplierController.getAllSupplier);
router.put('/:id', supplierController.updateSupplier);
router.delete('/:id', supplierController.deleteSupplier);
router.get('/:id', supplierController.getSupplierById);

module.exports = router;