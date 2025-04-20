const express = require('express');
const router = express.Router();
const purchaseItemController = require('../controllers/purchaseItem.controller');
const validatorWithJoiMiddleware = require('../middleware/validatorWithJoi.middleware');
const purchaseSchemas = require('../validators/purchase.schemas');

router.post('/', 
    validatorWithJoiMiddleware(purchaseSchemas),
    purchaseItemController.createPurchaseItem);
router.get('/', purchaseItemController.getAllPurchaseItems);
router.put('/:id', purchaseItemController.updatePurchaseItem);
router.delete('/:id', purchaseItemController.deletePurchaseItem);
router.get('/:id', purchaseItemController.getPurchaseItemById);

module.exports = router;