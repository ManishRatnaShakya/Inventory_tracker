const express = require('express');
const router = express.Router();
const purchaseItemController = require('../controllers/purchaseItem.controller');
const validatorWithJoiMiddleware = require('../middleware/validatorWithJoi.middleware');
const purchaseItemSchemas = require('../validators/purchaseItem.schema');

router.post('/', 
    validatorWithJoiMiddleware(purchaseItemSchemas),
    purchaseItemController.createPurchaseItem);
router.get('/', purchaseItemController.getAllPurchaseItems);
router.put('/:id', purchaseItemController.updatePurchaseItem);
router.delete('/:id', purchaseItemController.deletePurchaseItem);
router.get('/:id', purchaseItemController.getPurchaseItemById);
router.get('/purchase/:purchaseId', purchaseItemController.getPurchaseItemsByPurchaseId);

module.exports = router;