const { Sales } = require('../models');
const salesService = require('../services/sales.service')

exports.createSales = async (req, res, next) => {
    try {
        const sales = await salesService.createSales(req.body);
        res.status(200).json(sales)
    }
    catch(err) {
        next(err)
    }
};

exports.getAllSales = async (req, res) => {
    try {
        const sales = await salesService.getAllSales();
        res.json(sales)
    }
    catch(err) {
        next(err)
    }
};

exports.getSalesById = async (req, res) => {
    try {
        const sales = await salesService.getSalesById(req.params.id)
        res.json(sales)
    }
    catch(err) {
        next(err)
    }
};

exports.updateSales = async (req, res) => {
    try {
        const sales = await salesService.updateSales(req.params.id, req.body);
        res.json(sales)
    }
    catch(err) {
        next(err)
    }
}

exports.deleteSales = async (req, res) => {
    try {
        const sales = await salesService.deleteSales(req.params.id);
        res.json(sales)
    }
    catch(err) {
        next(err)
    }
}