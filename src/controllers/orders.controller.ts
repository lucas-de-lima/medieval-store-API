import { Request, Response } from 'express';
import OrderService from '../services/orders.services';
import statusCodes from './statusCodes';

interface AuthenticatedRequest extends Request {
  data?: any;
}

export default class OrderController {
  constructor(private orderService = new OrderService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getAll();
    return res.status(statusCodes.OK).json(orders);
  };
    
  public create = async (req: AuthenticatedRequest, res: Response) => {
    const token = req.data; 
    
    return res.status(statusCodes.CREATED).json({ token });
  };
}