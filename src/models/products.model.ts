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

  // public getById = async (id: number): Promise<IProduct> => {
  //   const product = await this.connection.execute<IProduct & RowDataPacket[]>(
  //     'SELECT * FROM Trybesmith.products WHERE id = ?',
  //     [id],
  //   );
  //   return product;
  // };

  public create = async (product: IProduct): Promise<IProduct> => {
    const { name, amount } = product;
    const [rows] = await this.connection.execute<IProduct & ResultSetHeader >(
      'INSERT INTO Trybesmith.products (name, amount) VALUE (?, ?)',
      [name, amount],
    );
    const { insertId } = rows;
    return { id: insertId, ...product } as IProduct;
  };

  // public update = async (product, id) => {
  //   const updatedProduct = await connection.execute();
  // };

  // public remove = async (id) => {
  //   await connection.execute();
  // };
}
