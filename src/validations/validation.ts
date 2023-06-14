import ILogin from '../interfaces/login.interface';
import IOrder from '../interfaces/order.interface';
import IProduct from '../interfaces/product.interface';
import IUser from '../interfaces/user.interface';
import { loginSchema, ordersSchema, productsSchema, userSchema } from './schemas';

export const validateProductsSchema = (product: IProduct) => productsSchema.validate(product);

export const validateUsersSchema = (user: IUser) => userSchema.validate(user);

export const validateLoginSchema = (login: ILogin) => loginSchema.validate(login);

export const validateOrdersSchema = (productsIds: IOrder) => (
  ordersSchema.validate(productsIds)
);