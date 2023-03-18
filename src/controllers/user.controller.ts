import { Request, Response } from 'express';
import UserService from '../services/user.services';
import statusCodes from './statusCodes';

interface AuthenticatedRequest extends Request {
  data?: any;
}

export default class UserController {
  constructor(private userService = new UserService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.userService.getAll();
    return res.status(statusCodes.OK).json(products);
  };
      
  // public getById = async (req: Request, res: Response) => {
  //   const { body } = req;
  //   return res.status(200).json();
  // };
    
  public create = async (req: AuthenticatedRequest, res: Response) => {
    const token = req.data; 
    
    return res.status(statusCodes.CREATED).json({ token });
  };
    
  // public update = async (req: Request, res: Response) => {
  //   const { body } = req;
  //   return res.status(200).json();
  // };
    
  // public remove = async (req: Request, res: Response) => {
  //   const { body } = req;
  //   return res.status(200).json();
  // };
}