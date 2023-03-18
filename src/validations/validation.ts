import IProduct from '../interfaces/product.interface';
import productsSchema from './schemas';

const validateProductsSchema = (product: IProduct) => productsSchema.validate(product);

export default validateProductsSchema;