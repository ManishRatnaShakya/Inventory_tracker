const Joi = require('joi');

const registerSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().valid('user', 'admin').optional()
});

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

const forgotPasswordSchema = Joi.object({
    email: Joi.string().email().required()
  });
  
  const resetPasswordSchema = Joi.object({
    newPassword: Joi.string().min(6).required()
  });
  
module.exports = {
    registerSchema,
    loginSchema,
    forgotPasswordSchema,
    resetPasswordSchema
}