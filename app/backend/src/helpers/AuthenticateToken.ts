import * as jwt from 'jsonwebtoken';
import HttpException from '../shared/http.exeption';
import 'dotenv/config';

const secret = process.env.JWT_SECRET || ('jwt_secret' as jwt.Secret);

const authenticateToken = async (authorization: string | undefined) => {
  if (!authorization) {
    throw new HttpException(401, 'missing token');
  }
  const validateToken = jwt.verify(authorization, secret);
  if (!validateToken) {
    throw new HttpException(401, 'missing token');
  }
  return validateToken;
};

export default authenticateToken;
