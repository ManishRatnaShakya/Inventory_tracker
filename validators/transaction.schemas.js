const Joi = require('joi');

const createTransactionSchema = Joi.object({
  productId: Joi.number().integer().required(),
  type: Joi.string().valid('add', 'sale', 'adjust').required(),
  quantity: Joi.number().integer().min(1).required()
});

module.exports = { createTransactionSchema };