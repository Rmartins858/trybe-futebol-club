import { NextFunction, Request, Response } from 'express';
import HttpException from '../shared/http.exeption';

import schemas from './schemas';

const validation = async (req: Request, res: Response, next: NextFunction) => {
  const { error } = schemas.loginSchema.validate(req.body);

  if (error) {
    throw new HttpException(400, error.details[0].message);
  }
  next();
};

export default validation;
