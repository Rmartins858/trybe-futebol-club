import { NextFunction, Request, Response } from 'express';
import HttpException from '../shared/http.exeption';
import TeamsService from '../service/ClubService';

export default class AuthMatches {
  teamsService: TeamsService;

  constructor() {
    this.teamsService = new TeamsService();
  }

  authMatches = async (req: Request, res: Response, next: NextFunction) => {
    const { awayTeam, homeTeam } = req.body;

    const existingTeams = await this.teamsService.getClubById(
      awayTeam,
      homeTeam,
    );

    if (!existingTeams) {
      throw new HttpException(404, 'There is no team with such id!');
    }

    if (homeTeam === awayTeam) {
      throw new HttpException(
        422,
        'It is not possible to create a match with two equal teams',
      );
    }
    next();
  };
}
