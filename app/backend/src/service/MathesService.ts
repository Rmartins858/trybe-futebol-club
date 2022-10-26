import MatchesModel from '../database/models/MatchesModel';
import Teams from '../database/models/TeamsModel';

export default class MatchService {
  private model = MatchesModel;
  private teams = Teams;

  getAllMatches = async (inProgress?: unknown) => {
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
}
