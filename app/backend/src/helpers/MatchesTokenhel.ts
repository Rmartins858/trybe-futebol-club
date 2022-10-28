import * as jwt from 'jsonwebtoken';
import HttpException from '../shared/http.exeption';
import 'dotenv/config';

const secret = process.env.JWT_SECRET || ('jwt_secret' as jwt.Secret);

const authenticateToken = async (authorization: any | undefined) => {
  if (!authorization) {
    throw new HttpException(401, 'Token must be a valid token');
  }
  try {
    jwt.verify(authorization, secret);
  } catch (error) {
    console.log('error no error ->->', error);
    throw new HttpException(401, 'Token must be a valid token');
  }
};
export default authenticateToken;
