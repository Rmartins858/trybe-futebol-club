import { NextFunction, Request, Response } from 'express';
import HttpException from '../shared/http.exeption';

const authMatches = async (req: Request, res: Response, next: NextFunction) => {
  const { awayTeam, homeTeam } = req.body;
  if (homeTeam === awayTeam) {
    throw new HttpException(422, 'It is not possible to create a match with two equal teams');
  }
  next();
};

export default authMatches;
