const Joi = require('joi');

const purchaseItemSchemas = Joi.array().items(
    Joi.object({
    quantity: Joi.number().required(),
    purchaseDate: Joi.date().required(),
    totalAmount: Joi.number().required(),
    productId: Joi.number()
        .integer()
        .required()
        .messages({
          'number.base': `"productId" must be an integer`,
          'any.required': `"productId" is required`
        }),

    purchaseId: Joi.number()
        .integer()
        .required()
        .messages({
          'number.base': `"productId" must be an integer`,
          'any.required': `"productId" is required`
        }),

})
)

module.exports = purchaseItemSchemas