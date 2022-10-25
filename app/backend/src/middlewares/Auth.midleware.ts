import { NextFunction, Request, Response } from 'express';
import authenticateToken from '../helpers/AuthenticateToken';
import HttpException from '../shared/http.exeption';

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new HttpException(400, 'missing token');
  }
  const token = await authenticateToken(authorization) as any;
  const { role } = token.data;
  res.status(200).json({ role });
  next();
};

export default authMiddleware;
