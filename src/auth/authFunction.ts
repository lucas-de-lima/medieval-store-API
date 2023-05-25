import jwt from 'jsonwebtoken';
import IUser from '../interfaces/user.interface';

const secret = process.env.JWT_SECRET as string;

const JWT_CONFIG: jwt.SignOptions = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

const generateToken = (data: IUser): string => jwt.sign({ data }, secret, JWT_CONFIG);

const verifyToken = (token: string): string | jwt.JwtPayload => jwt.verify(token, secret);

export { generateToken, verifyToken };