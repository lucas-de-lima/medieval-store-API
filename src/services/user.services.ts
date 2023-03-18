import IUser from '../interfaces/user.interface';
import connection from '../models/connection';
import UserModel from '../models/user.model';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public getAll = async (): Promise<IUser[]> => {
    const users = await this.model.getAll();
    return users;
  };
    
  // public getById = async (id) => {
  
  // };
  
  public create = async (user: IUser): Promise<IUser> => {
    const newUser = await this.model.create(user);        
    return newUser;
  };
  
  // public update = async (product, id) => {
  
  // };
  
  // public remove = async (id) => {
  
  // };
}
