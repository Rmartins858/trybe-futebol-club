import { Request, Response } from 'express';
import MathesServices from '../service/MathesService';

const mathesServices = new MathesServices();

export default class MathesController {
  getAll = async (req: Request, res: Response) => {
    const { inProgress } = req.query;
    const teams = await mathesServices.getAllMatches(inProgress);
    return res.status(200).json(teams);
  };
}
