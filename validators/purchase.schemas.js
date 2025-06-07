const Joi = require('joi');

const purchaseSchemas = Joi.object({
    purchaseDate: Joi.date().required(),
    total_amount: Joi.number().required(),
    supplierId: Joi.number()
           .integer()
           .required()
           .messages({
             'number.base': `"supplierId" must be an integer`,
             'any.required': `"supplierId" is required`
           }),
});

module.exports = purchaseSchemas