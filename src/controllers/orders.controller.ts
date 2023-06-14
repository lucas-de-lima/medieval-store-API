import { Request, Response } from 'express';
import OrderService from '../services/orders.services';
import statusCodes from './statusCodes';
import { verifyToken } from '../auth/authFunction';

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
    const token = req.headers.authorization;
    
    if (token) {
      const { productsIds } = req.body;
      const decodedToken = verifyToken(token);
      if (typeof decodedToken !== 'string' && decodedToken.data) {
        const userId = decodedToken.data[0].id;
        await this.orderService.insertProductOrder(userId, productsIds);
        const response = {
          userId,
          productsIds,
        };
        // console.log('CONSTROLLER', response);
        
        return res.status(statusCodes.CREATED).json(response);
      }
    }
  };
}