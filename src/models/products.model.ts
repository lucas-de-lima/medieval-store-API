import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import IProduct from '../interfaces/product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async (): Promise<IProduct[]> => {
    const [rows] = await this.connection.execute<IProduct[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.products',
    );
    return rows as IProduct[];
  };

  public create = async (product: IProduct): Promise<IProduct> => {
    const { name, amount } = product;
    const [rows] = await this.connection.execute<IProduct & ResultSetHeader >(
      'INSERT INTO Trybesmith.products (name, amount) VALUE (?, ?)',
      [name, amount],
    );
    const { insertId } = rows;
    return { id: insertId, ...product } as IProduct;
  };
}
