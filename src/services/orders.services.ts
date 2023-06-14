import IOrder from '../interfaces/order.interface';
import connection from '../models/connection';
import OrderModel from '../models/orders.model';
import ProductModel from '../models/products.model';

export default class OrderService {
  public orderModel: OrderModel;

  private productModel: ProductModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
    this.productModel = new ProductModel(connection);
  }

  public getAll = async (): Promise<IOrder[]> => {
    const orders = await this.orderModel.getAll();
    return orders;
  };

  public async insertProductOrder(userId: number, productIds: number[]): Promise<void> {
    const orderId = await this.orderModel.create(userId);
    const response = productIds.forEach((productId) => {
      this.productModel.insert(orderId, productId);
    });
    // console.log('SERVICE', response);
    
    return response;
  }
}
