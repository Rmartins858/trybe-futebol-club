import { Request, Response } from 'express';
import MatchServices from '../service/MatchServices';

export default class MathController {
  private matchServices: MatchServices;

  constructor() {
    this.matchServices = new MatchServices();
    this.createMatch = this.createMatch.bind(this);
    this.matchChangeStatus = this.matchChangeStatus.bind(this);
    this.matchUpdate = this.matchUpdate.bind(this);
  }

  public getAll = async (req: Request, res: Response) => {
    const { inProgress } = req.query;
    const teams = await this.matchServices.getAllMatches(inProgress);
    res.status(200).json(teams);
  };

  public createMatch = async (req: Request, res: Response) => {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = req.body;

    const match = await this.matchServices.createMatch({
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
    });
    res.status(201).json(match);
  };

  public matchChangeStatus = async (req: Request, res: Response) => {
    const { id } = req.params;
    const resultProgress = await this.matchServices.matchChangeStatus(
      Number(id),
    );
    if (resultProgress) {
      res.status(200).json({ message: 'Finished' });
    }
  };

  public matchUpdate = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    await this.matchServices
      .matchUpdate(Number(id), homeTeamGoals, awayTeamGoals);
    res.status(200).json({ message: 'goals updated' });
  };
}
