import express from 'express';
import OrderController from '../controllers/orders.controller';

const orderRouter = express.Router();

const orderController = new OrderController();

orderRouter.get('/', orderController.getAll);
//
export default orderRouter;