
const purchaseService = require('../services/purchase.service')

exports.createPurchase = async (req, res, next) => {
    try {
        const purchase = await purchaseService.createPurchase(req.body);
        res.status(200).json(purchase)
    }
    catch(err) {
        next(err)
    }
};

exports.getAllPurchases = async (req, res, next) => {
    try {
        const purchase = await purchaseService.getAllPurchase();
        res.json(purchase)
    }
    catch(err) {
        next(err)
    }
};

exports.getPurchaseById = async (req, res, next) => {
    try {
        const purchase  = await purchaseService.getPurchaseById(req.params.id)
        res.status(200).json(purchase)
    }
    catch(err) {
        next(err)
    }
}


exports.updatePurchase = async (req, res, next) => {
    try {
        const purchase  = await purchaseService.updatePurchase(req.params.id, req.body)
        res.status(200).json(purchase)
    }
    catch(err) {
        next(err)
    }
}

exports.deletePurchase = async (req, res, next) => {
    try {
        const purchase  = await purchaseService.deletePurchase(req.params.id)
        res.status(200).json(purchase)
    }
    catch(err) {
        next(err)
    }
}
