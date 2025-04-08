const { Purchase } = require('../models');

exports.createPurchase = async (req, res) => {
    try {
        const purchase = await Purchase.create(req.body);
        res.status(200).json(purchase)
    }
    catch(err) {
        res.status(500).json({error: err.message});
    }
};

exports.getAllPurchases = async (req, res) => {
    try {
        const purchase = await Purchase.findAll();
        res.json(purchase)
    }
    catch(err) {
        res.status(500).json({ error: err.message })
    }
}
