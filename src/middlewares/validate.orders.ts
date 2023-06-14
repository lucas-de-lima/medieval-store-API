import { Request, Response, NextFunction } from 'express';
import { validateOrdersSchema } from '../validations/validation';

const validateOrder = (req: Request, res: Response, next: NextFunction) => {
  const order = req.body;
  const validate = validateOrdersSchema(order);
  const { error } = validate;
 
  if (error && error.message && error.message.includes('required')) {
    const { message } = error;
    return res.status(400).json({ message });
  }

  if (error) {
    const { message } = error;
    return res.status(422).json({ message });
  }

  next();
};

export default validateOrder;