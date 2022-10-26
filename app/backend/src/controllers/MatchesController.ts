import { Request, Response } from 'express';
import MathesServices from '../service/MathesService';

const mathesServices = new MathesServices();

export default class MathesController {
  getAll = async (_req: Request, res: Response) => {
    const teams = await mathesServices.getAllMatches();
    return res.status(200).json(teams);
  };
}
