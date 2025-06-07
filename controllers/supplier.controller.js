const { Supplier } = require('../models');
const supplierService = require('../services/supplier.service')

exports.createSupplier = async (req, res, next) => {
    try {
        const supplier = await supplierService.createSupplier(req.body);
        res.status(200).json(supplier)
    }
    catch(err) {
        next(err)
    }
};

exports.getAllSupplier = async (req, res) => {
    try {
        const suppliers = await supplierService.getAllSupplier();
        res.json(suppliers)
    }
    catch(err) {
        next(err)
    }
}

exports.getSupplierById = async(req, res) => {
    try {
        const supplier = await supplierService.getSupplierById(req.params.id);
        res.json(supplier)
    }
    catch(err) {
        next(err)
    }
};

exports.updateSupplier = async(req, res, next) => {
    try {
        const supplier = await supplierService.updateSupplier(req.params.id, req.body);
        res.json(supplier)
    }
    catch(err) {
        next(err)
    }
};

exports.deleteSupplier = async(req, res, next) => {
    try {
        const supplier = await supplierService.deleteSupplier(req.params.id);
        res.json(supplier)
    }
    catch(err) {
        next(err)
    }
}

