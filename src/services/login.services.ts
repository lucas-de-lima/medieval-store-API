import ILogin from '../interfaces/login.interface';
import IUser from '../interfaces/user.interface';
import connection from '../models/connection';
import UserModel from '../models/user.model';

export default class LoginService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public login = async (login: ILogin): Promise<IUser> => {
    const response = await this.model.login(login);
    return response;
  };

  public getByUsername = async (login: ILogin): Promise<IUser | false> => {
    const response = await this.model.getByUsername(login);
    if (Array.isArray(response) && response.length === 0) {
      return false;
    }
    return response;
  };
}
