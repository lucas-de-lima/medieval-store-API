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

  public create = async (product: IUser): Promise<IUser> => {
    const { username, vocation, level, password } = product;
    const [rows] = await this.connection.execute<IUser & ResultSetHeader >(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUE (?, ?, ?, ?)',
      [username, vocation, level, password],
    );
    const { insertId } = rows;
    
    return { id: insertId, ...{ username, vocation, level } } as unknown as IUser;
  };
}
