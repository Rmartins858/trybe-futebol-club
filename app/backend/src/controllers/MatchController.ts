import { Request, Response } from 'express';
import MatchServices from '../service/MatchServices';

export default class MathController {
  private matchServices: MatchServices;

  constructor() {
    this.matchServices = new MatchServices();
    this.createMatch = this.createMatch.bind(this);
  }

  getAll = async (req: Request, res: Response) => {
    const { inProgress } = req.query;
    const teams = await this.matchServices.getAllMatches(inProgress);
    return res.status(200).json(teams);
  };

  async createMatch(req: Request, res: Response) {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = req.body;

    const match = await this.matchServices.createMatch({
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
    });

    res.status(201).json(match);
  }
}
