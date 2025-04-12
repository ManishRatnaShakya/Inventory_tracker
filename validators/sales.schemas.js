const Joi = require('joi');

const salesSchemas = Joi.object({
     quantity: Joi.number().required(),
     salesDate: Joi.date().required() 
})

module.exports = salesSchemas