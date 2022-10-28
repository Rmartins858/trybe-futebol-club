import MatchesModel from '../database/models/MatchesModel';
import Teams from '../database/models/TeamsModel';

export interface IMatch {
  homeTeam: number;
  awayTeam: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
}

export default class MatchService {
  private model = MatchesModel;
  private teams = Teams;

  getAllMatches = async (inProgress: unknown) => {
    const matches = await this.model.findAll({
      include: [
        {
          model: this.teams,
          as: 'teamHome',
          attributes: { exclude: ['id'] },
        },
        {
          model: this.teams,
          as: 'teamAway',
          attributes: { exclude: ['id'] },
        },
      ],
    });
    if (inProgress) {
      return matches.filter((match) => String(match.inProgress) === inProgress);
    }

    return matches;
  };

  async createMatch(match: IMatch) {
    return this.model.create({ ...match, inProgress: true });
  }

  async matchChangeStatus(id: number) {
    return this.model.update(
      { inProgress: false },
      { where: { id } },
    );
  }

  async matchUpdate(id: number, homeTeamGoals: number, awayTeamGoals: number) {
    return this.model.update(
      { homeTeamGoals, awayTeamGoals },
      { where: { id } },
    );
  }
}
