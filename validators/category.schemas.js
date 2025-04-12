const Joi = require('joi');

const categorySchema = Joi.object({
    name: Joi.string().max(1100).required
})