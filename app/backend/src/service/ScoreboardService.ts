import sequelizeModel from '../database/models/index';
import Teams from '../database/models/TeamsModel';
import Matches from '../database/models/MatchesModel';

const query1 = `SELECT 
teams.team_name as name,
(sum(home_team_goals>away_team_goals) * 3) + sum(home_team_goals=away_team_goals) as totalPoints,
count(*) as totalGames,
sum(home_team_goals>away_team_goals) as totalVictories,
sum(home_team_goals=away_team_goals) as totalDraws,
sum(home_team_goals<away_team_goals) as totalLosses,
sum(home_team_goals) as goalsFavor,
sum(away_team_goals) as goalsOwn,
sum(home_team_goals) - sum(away_team_goals) as goalsBalance,
ROUND((((sum(home_team_goals>away_team_goals) * 3) 
+ sum(home_team_goals=away_team_goals)) / ((count(*) * 3))) * 100, 2) as efficiency`;

const query2 = ` 
FROM TRYBE_FUTEBOL_CLUBE.matches AS matches
INNER JOIN TRYBE_FUTEBOL_CLUBE.teams AS teams ON matches.home_team = teams.id
where in_progress = 0
group by teams.team_name
order by totalPoints desc, totalVictories desc, goalsBalance desc, goalsFavor desc, goalsOwn desc`;

export default class ScoreboardService {
  private modelTeams = Teams;
  private modelMatches = Matches;
  private sequelize = sequelizeModel;

  async getHomeMatchs() {
    const [matches] = await this.sequelize.query(`${query1}${query2}`);
    return matches;
  }
}
