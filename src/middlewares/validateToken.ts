import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../auth/authFunction';

interface AuthenticatedRequest extends Request {
  data?: any;
}

const validateToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const payload: any = verifyToken(authorization);
    req.data = payload.data;
    return next();
  } catch (error) {
    return res.status(401).json({
      message: 'Expired or invalid token',
    });
  }
};

export default validateToken;
