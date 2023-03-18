import { Request, Response, NextFunction } from 'express';
import { generateToken } from '../auth/authFunction';

import UserService from '../services/user.services';

interface AuthenticatedRequest extends Request {
  data?: any;
}

export default class ValidateUser {
  constructor(private userService = new UserService()) {}

  public validateUser = async (req: AuthenticatedRequest, _res: Response, next: NextFunction) => {
    const user = req.body;
    
    const newUser = await this.userService.create(user);

    const token = generateToken(newUser);
    
    req.data = token;

    next();
  };
}