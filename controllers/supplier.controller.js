const { Supplier } = require('../models');

exports.createSupplier = async (req, res) => {
    try {
        const supplier = await Supplier.create(req.body);
        res.status(200).json(supplier)
    }
    catch(err) {
        res.status(500).json({error: err.message});
    }
};

exports.getAllSupplier = async (req, res) => {
    try {
        const suppliers = await Supplier.findAll();
        res.json(suppliers)
    }
    catch(err) {
        res.status(500).json({ error: err.message })
    }
}

