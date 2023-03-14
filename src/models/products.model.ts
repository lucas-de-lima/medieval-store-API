import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/product.interface';

export default class ProductModel {
  public connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  }
}

const getAll = async (): Promise<Product> => {
  const products = await this.connection.execute('SELECT * FROM Trybesmith.products');
  const [rows] = products;
  return rows as Product;
};

const getById = async (id) => {
  const product = await connection.execute();
};

const create = async (product) => {
  const newProduct = await connection.execute();
};

const update = async (product, id) => {
  const updatedProduct = await connection.execute();
};

const remove = async (id) => {
  await connection.execute();
};
