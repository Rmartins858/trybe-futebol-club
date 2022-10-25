import { Request, Response } from 'express';
import ClubService from '../service/ClubService';

const teamsService = new ClubService();

export default class TeamsController {
  getAll = async (_req: Request, res: Response) => {
    const teams = await teamsService.getAllTeams();
    return res.status(200).json(teams);
  };

  getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const teams = await teamsService.getById(id);
    return res.status(200).json(teams);
  };
}
