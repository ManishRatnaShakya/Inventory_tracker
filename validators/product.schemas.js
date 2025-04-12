const Joi = require('joi');

const productSchemas = Joi.object({
    name: Joi.string().min(3).required(),
    quantity: Joi.number().required(),
    price: Joi.number().precision(2)
    .positive()
    .required()
    .messages({
        'number.base': `"price" mush be a number`,
        "number.positive": `"price" must be greater than zero`,
    }),
    categoryId: Joi.number()
    .integer()
    .required()
    .messages({
      'number.base': `"categoryId" must be an integer`,
      'any.required': `"categoryId" is required`
    })
})

module.exports = {
    productSchemas,
}