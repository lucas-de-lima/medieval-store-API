import ILogin from '../interfaces/login.interface';
import IProduct from '../interfaces/product.interface';
import IUser from '../interfaces/user.interface';
import { loginSchema, productsSchema, userSchema } from './schemas';

export const validateProductsSchema = (product: IProduct) => productsSchema.validate(product);

export const validateUsersSchema = (user: IUser) => userSchema.validate(user);

export const validateLoginSchema = (login: ILogin) => loginSchema.validate(login);