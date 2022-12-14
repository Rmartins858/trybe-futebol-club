import HttpException from '../shared/http.exeption';
import TeamsModel from '../database/models/TeamsModel';

interface ITeam {
  id: number;
  teamName: string;
}

class TeamsService {
  model = TeamsModel;

  getAllTeams = async (): Promise<ITeam[]> => {
    const allTeams = await this.model.findAll();
    return allTeams;
  };

  getById = async (id: string) => {
    const teamsById = await this.model.findOne({ where: { id } });
    if (!teamsById) {
      throw new HttpException(401, 'time not found by id');
    }
    return teamsById;
  };

  getClubById = async (homeTeam: number, awayTeam: number) => {
    const homeTeamId = await this.model.findOne({ where: { id: homeTeam } });
    const awayTeamId = await this.model.findOne({ where: { id: awayTeam } });
    const teamOk = !(!homeTeamId || !awayTeamId);
    return teamOk;
  };
}

export default TeamsService;
