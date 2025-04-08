const { Sales } = require('../models');

exports.createSales = async (req, res) => {
    try {
        const sales = await Sales.create(req.body);
        res.status(200).json(sales)
    }
    catch(err) {
        res.status(500).json({error: err.message});
    }
};

exports.getAllSales = async (req, res) => {
    try {
        const sales = await Sales.findAll();
        res.json(sales)
    }
    catch(err) {
        res.status(500).json({ error: err.message })
    }
}
