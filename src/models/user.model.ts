import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import IUser from '../interfaces/user.interface';
import ILogin from '../interfaces/login.interface';

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

  public getByUsername = async (login: ILogin): Promise<IUser> => {
    const { username, password } = login;
    const [rows] = await this.connection.execute<IUser & RowDataPacket[]>(
      `SELECT username, password
      FROM Trybesmith.users WHERE username = ? AND password = ?;`,
      [username, password],
    );
    return rows;
  };

  public create = async (product: IUser): Promise<IUser> => {
    const { username, vocation, level, password } = product;
    const [rows] = await this.connection.execute<IUser & ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUE (?, ?, ?, ?)',
      [username, vocation, level, password],
    );
    const { insertId } = rows;

    return {
      id: insertId,
      ...{ username, vocation, level },
    } as unknown as IUser;
  };

  public login = async (login: ILogin) => {
    const { username, password } = login;
    const [rows] = await this.connection.execute<IUser & RowDataPacket[]>(
      `SELECT id, username, level, vocation 
      FROM Trybesmith.users WHERE username = ? AND password = ?;`,
      [username, password],
    );
    return rows;
  };
}
