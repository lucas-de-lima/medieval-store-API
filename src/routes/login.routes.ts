import express from 'express';
import LoginController from '../controllers/login.controller';
import ValidateLogin from '../middlewares/validate.login';

const loginRouter = express.Router();

const loginController = new LoginController();
const validateLogin = new ValidateLogin();

loginRouter.post('/', validateLogin.validateLogin, loginController.login);

export default loginRouter;