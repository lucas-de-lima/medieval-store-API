import { Request, Response } from 'express';
import LoginService from '../services/login.services';
import { generateToken } from '../auth/authFunction';

export default class LoginController {
  constructor(private loginService = new LoginService()) {}

  public login = async (req:Request, res: Response) => {
    const login = req.body;
    const response = await this.loginService.login(login);
    const token = generateToken(response);
    
    return res.status(200).json({ token });
  };
}