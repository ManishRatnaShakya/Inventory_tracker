const express = require('express');
const router = express.Router();
const purchaseController = require('../controllers/purchase.controller');
const validatorWithJoiMiddleware = require('../middleware/validatorWithJoi.middleware');
const purchaseSchemas = require('../validators/purchase.schemas');

router.post('/', 
    validatorWithJoiMiddleware(purchaseSchemas),
    purchaseController.createPurchase);
router.get('/', purchaseController.getAllPurchases);
router.put('/:id', purchaseController.updatePurchase);
router.delete('/:id', purchaseController.deletePurchase);
router.get('/:id', purchaseController.getPurchaseById);

module.exports = router;