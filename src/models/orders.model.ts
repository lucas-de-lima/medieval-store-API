import { Pool, RowDataPacket } from 'mysql2/promise';
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

  // public getById = async (id: number): Promise<IUser> => {
  //   const product = await this.connection.execute<IUser & RowDataPacket[]>(
  //     'SELECT * FROM Trybesmith.products WHERE id = ?',
  //     [id],
  //   );
  //   return product;
  // };

  //   public create = async (product: IUser): Promise<IUser> => {
  //     const { username, vocation, level, password } = product;
  //     const [rows] = await this.connection.execute<IUser & ResultSetHeader >(
  //       'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUE (?, ?, ?, ?)',
  //       [username, vocation, level, password],
  //     );
  //     const { insertId } = rows;

  //     return { id: insertId, ...{ username, vocation, level } } as unknown as IUser;
  //   };

  // public update = async (product, id) => {
  //   const updatedProduct = await connection.execute();
  // };

  // public remove = async (id) => {
  //   await connection.execute();
  // };
}
