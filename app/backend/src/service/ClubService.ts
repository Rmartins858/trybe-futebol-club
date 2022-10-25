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
}

export default TeamsService;
