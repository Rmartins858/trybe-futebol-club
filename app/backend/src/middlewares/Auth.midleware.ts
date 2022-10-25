import { NextFunction, Request, Response } from 'express';
import HttpException from '../shared/http.exeption';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    throw new HttpException(400, 'missing token');
  }
  next();
};

export default authMiddleware;
