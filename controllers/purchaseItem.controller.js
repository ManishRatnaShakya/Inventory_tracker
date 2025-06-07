
const purchaseItemService = require('../services/purchaseItem.service')

exports.createPurchaseItem = async (req, res, next) => {
    try {
        const purchase = await purchaseItemService.createPurchaseItem(req.body);
        res.status(200).json(purchase)
    }
    catch(err) {
        next(err)
    }
};

exports.getAllPurchaseItems = async (req, res, next) => {
    try {
        const purchase = await purchaseItemService.getAllPurchase();
        res.json(purchase)
    }
    catch(err) {
        next(err)
    }
};

exports.getPurchaseItemById = async (req, res, next) => {
    try {
        const purchase  = await purchaseItemService.getPurchaseById(req.params.id)
        res.status(200).json(purchase)
    }
    catch(err) {
        next(err)
    }
}

exports.updatePurchaseItem = async (req, res, next) => {
    try {
        const purchase  = await purchaseItemService.updatePurchase(req.params.id, req.body)
        res.status(200).json(purchase)
    }
    catch(err) {
        next(err)
    }
}

exports.deletePurchaseItem = async (req, res, next) => {
    try {
        const purchase  = await purchaseItemService.deletePurchase(req.params.id)
        res.status(200).json(purchase)
    }
    catch(err) {
        next(err)
    }
}

exports.getPurchaseItemsByPurchaseId = async (req, res, next) => {
    try {
        const { purchaseId } = req.params;
        const items = await purchaseItemService.getPurchaseItemsByPurchaseId(purchaseId);
        res.status(200).json(items);
      } catch (error) {
        next(error);
      }
}
