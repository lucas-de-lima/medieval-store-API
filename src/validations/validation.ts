import IProduct from '../interfaces/product.interface';
import IUser from '../interfaces/user.interface';
import { productsSchema, userSchema } from './schemas';

export const validateProductsSchema = (product: IProduct) => productsSchema.validate(product);

export const validateUsersSchema = (user: IUser) => userSchema.validate(user);
