import express from 'express';
import UserController from '../controllers/user.controller';
import ValidateUser from '../middlewares/validate.user';

const usersRouter = express.Router();

const userController = new UserController();
const validateUser = new ValidateUser();

usersRouter.post('/', validateUser.validateUser, userController.create);

export default usersRouter;