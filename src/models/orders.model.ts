import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import IOrder from '../interfaces/order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async (): Promise<IOrder[]> => {
    const [rows] = await this.connection.execute<IOrder[] & RowDataPacket[]>(
      `SELECT o.id, o.user_id as userId, JSON_ARRAYAGG(CAST(p.id AS UNSIGNED)) as productsIds 
      FROM Trybesmith.orders o 
      INNER JOIN Trybesmith.products p ON o.id = p.order_id 
      GROUP BY o.id
      `,
    );
    
    return rows as IOrder[];
  };

  public create = async (userId: number) => {
    const [dataInserted] = await this.connection.execute<ResultSetHeader>(`
      INSERT INTO Trybesmith.orders (user_id) 
      VALUES (?);
    `, [userId]);
    const { insertId } = dataInserted;
    return insertId;
  };
}
