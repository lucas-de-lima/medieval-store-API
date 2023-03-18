import { Request, Response, NextFunction } from 'express';
import { generateToken } from '../auth/authFunction';
import statusCodes from '../controllers/statusCodes';

import UserService from '../services/user.services';
import { validateUsersSchema } from '../validations/validation';

interface AuthenticatedRequest extends Request {
  data?: any;
}

export default class ValidateUser {
  constructor(private userService = new UserService()) {}

  public validateUser = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const user = req.body;
    const validateResponse = validateUsersSchema(user);
    if (validateResponse.error) {
      if (!validateResponse.error.message.includes('required')) {
        return res.status(statusCodes.UNPROCESSABLE_ENTITY)
          .json({ message: validateResponse.error.message });
      }
      return res.status(statusCodes.BAD_REQUEST)
        .json({ message: validateResponse.error.message });
    }
    const newUser = await this.userService.create(user);
    const token = generateToken(newUser);
    req.data = token;
    next();
  };
}