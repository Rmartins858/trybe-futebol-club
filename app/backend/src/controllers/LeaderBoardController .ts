import { Request, Response } from 'express';

import ScoreboardService from '../service/ScoreboardService';

export default class LeaderBoardController {
  private leaderboardService: ScoreboardService;

  constructor() {
    this.leaderboardService = new ScoreboardService();
  }

  getAllLeaderBoardController = async (req: Request, res: Response) => {
    const result = await this.leaderboardService.getHomeMatchs();
    res.status(200).json(result);
  };
}
