import Joi from 'joi';

export const productsSchema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

export const userSchema = Joi.object({ 
  username: Joi.string().min(3).required(),
  vocation: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

export const loginSchema = Joi.object({
  username: Joi.string().min(3).required(),
  password: Joi.string().min(8).required(),
});

export const ordersSchema = Joi.object({
  productsIds: Joi.array().min(1).required().messages({
    'array.min': '"productsIds" must include only numbers',
  }),
});