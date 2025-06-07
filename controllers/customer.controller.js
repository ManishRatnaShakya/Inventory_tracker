const {Customer} = require('../models');
const customerService = require('../services/customer.service')


exports.createCustomer = async (req, res, next) => {
    try {
        const customer = await customerService.createCustomer(req.body);
        res.status(200).json(customer)
    }
    catch(err) {
       next(err)
    }
};

exports.getAllCustomer = async (req, res, next) => {
    try {
        const customer = await customerService.getAllCustomers();
        res.json(customer)
    }
    catch(err) {
        next(err)
    }
};

exports.deleteCustomer = async (req, res, next) => {
    try {
        const customer = await customerService.deleteCustomer(req.params.id);
        res.json(customer)
    }
    catch(err) {
        next(err)
    }
};

exports.updateCustomer = async(req, res, next) => {
    try {
        const customer = await customerService.updateCustomer(req.params.id);
    }
    catch(err) {
        next(err)
    }
}

exports.getCustomerById = async (req, res, next) => {
    try {
        const customer = await customerService.getCustomerById(req.params.id);
        res.json(customer)
    }
    catch(err) {
        next(err)
    }
};