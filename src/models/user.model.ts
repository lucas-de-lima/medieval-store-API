import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import IUser from '../interfaces/user.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async (): Promise<IUser[]> => {
    const [rows] = await this.connection.execute<IUser[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.products',
    );
    return rows as IUser[];
  };

  // public getById = async (id: number): Promise<IUser> => {
  //   const product = await this.connection.execute<IUser & RowDataPacket[]>(
  //     'SELECT * FROM Trybesmith.products WHERE id = ?',
  //     [id],
  //   );
  //   return product;
  // };

  public create = async (product: IUser): Promise<IUser> => {
    const { username, vocation, level, password } = product;
    const [rows] = await this.connection.execute<IUser & ResultSetHeader >(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUE (?, ?, ?, ?)',
      [username, vocation, level, password],
    );
    const { insertId } = rows;
    
    return { id: insertId, ...{ username, vocation, level } } as unknown as IUser;
  };

  // public update = async (product, id) => {
  //   const updatedProduct = await connection.execute();
  // };

  // public remove = async (id) => {
  //   await connection.execute();
  // };
}
