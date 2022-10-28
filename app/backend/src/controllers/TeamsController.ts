import { Request, Response } from 'express';
import ClubService from '../service/ClubService';

export default class TeamsController {
  private teamsService: ClubService;

  constructor() {
    this.teamsService = new ClubService();
  }

  getAll = async (_req: Request, res: Response) => {
    const teams = await this.teamsService.getAllTeams();
    return res.status(200).json(teams);
  };

  getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const teams = await this.teamsService.getById(id);
    return res.status(200).json(teams);
  };
}
