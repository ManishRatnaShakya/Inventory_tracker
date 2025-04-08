const express = require('express');
const router = express.Router();
const purchaseController = require('../controllers/purchase.controller')

router.post('/', purchaseController.createPurchase);
router.get('/', purchaseController.getAllPurchases);

module.exports = router;