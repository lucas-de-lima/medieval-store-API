import { Request, Response, NextFunction } from 'express';
import { validateLoginSchema } from '../validations/validation';
import LoginService from '../services/login.services';

export default class ValidateLogin {
  constructor(private loginService = new LoginService()) {}

  public validateLogin = async (req: Request, res: Response, next: NextFunction) => {
    const login = req.body;
    const validate = validateLoginSchema(login);
    const { error } = validate;
    if (error) {
      const { message } = error;
      return res.status(400).json({ message });
    }
    const response = await this.loginService.getByUsername(login);
    if (!response) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }
  
    next();
  };
}
