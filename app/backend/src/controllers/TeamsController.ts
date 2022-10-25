import { Request, Response } from 'express';
import ClubService from '../service/ClubService';

const userService = new ClubService();

export default class TeamsController {
  getAll = async (_req: Request, res: Response) => {
    const teams = await userService.getAllTeams();
    return res.status(200).json(teams);
  };
}
