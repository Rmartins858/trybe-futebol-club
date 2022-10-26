import MatchesModel from '../database/models/MatchesModel';
import Teams from '../database/models/TeamsModel';

export default class MatchService {
  private model = MatchesModel;
  private teams = Teams;

  getAllMatches = async () => {
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
    return matches;
  };
}
