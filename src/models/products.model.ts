import { Pool, RowDataPacket } from 'mysql2/promise';
import IProduct from '../interfaces/product.interface';
// import connection from './connection';

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

  // public getById = async (id) => {
  //   const product = await connection.execute();
  // };
  
  // public create = async (product) => {
  //   const newProduct = await connection.execute();
  // };
  
  // public update = async (product, id) => {
  //   const updatedProduct = await connection.execute();
  // };
  
  // public remove = async (id) => {
  //   await connection.execute();
  // };
}
