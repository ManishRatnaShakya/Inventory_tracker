const Joi = require('joi');

const supplierSchemas = Joi.object({
    name: Joi.string().min(3).required(),
    contactInfo: Joi.string().min(6).required(),
    address: Joi.string().optional()
});

module.exports = supplierSchemas