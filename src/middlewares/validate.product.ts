import { Request, Response, NextFunction } from 'express';
import statusCodes from '../controllers/statusCodes';
import { validateProductsSchema } from '../validations/validation';

const validateProduct = (req: Request, res: Response, next: NextFunction) => {
  const product = req.body;
  const validateResponse = validateProductsSchema(product);
  if (!product.name) {
    return res.status(statusCodes.BAD_REQUEST).json({ message: '"name" is required' });
  }
  if (!product.amount) {
    return res.status(statusCodes.BAD_REQUEST).json({ message: '"amount" is required' });
  }
  if (validateResponse.error) {
    const { message } = validateResponse.error;
    return res.status(statusCodes.UNPROCESSABLE_ENTITY).json({ message });
  }
  next();
};

export default validateProduct;