import IOrder from '../interfaces/order.interface';
import connection from '../models/connection';
import OrderModel from '../models/orders.model';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public getAll = async (): Promise<IOrder[]> => {
    const orders = await this.model.getAll();
    return orders;
  };
    
  // public getById = async (id) => {
  
  // };
  
  //   public create = async (user: IOrder): Promise<IOrder> => {
  //     const newUser = await this.model.create(user);        
  //     return newUser;
  //   };
  
  // public update = async (product, id) => {
  
  // };
  
  // public remove = async (id) => {
  
  // };
}
