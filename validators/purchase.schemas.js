const Joi = require('joi');

const purchaseSchemas = Joi.object({
    quantity: Joi.number().required(),
    purchaseDate: Joi.date().required(),
    productId: Joi.number()
        .integer()
        .required()
        .messages({
          'number.base': `"productId" must be an integer`,
          'any.required': `"productId" is required`
        }),

    supplierId: Joi.number()
    .integer()
    .required()
    .messages({
      'number.base': `"productId" must be an integer`,
      'any.required': `"productId" is required`
    }),

    
});

module.exports = purchaseSchemas