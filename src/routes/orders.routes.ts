import express from 'express';
import OrderController from '../controllers/orders.controller';
import validateOrder from '../middlewares/validate.orders';
import validateToken from '../middlewares/validate.token';

const orderRouter = express.Router();

const orderController = new OrderController();

orderRouter.get('/', orderController.getAll);
orderRouter.post('/', validateToken, validateOrder, orderController.create);

export default orderRouter;