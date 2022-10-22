import TokenManager from '../helpers/TokenManager';
import UserModel from '../database/models/UsersModel';

interface IRequest{
  email: string,
  password: string
}

export default class UserService {
  public makelogin = async ({ email, password }: IRequest) => {
    const user = await UserModel.findAll({ where: { email, password } });
    if (!user) throw new Error('Incorrect email or password');

    const token = TokenManager.makeToken(user);
    return token;
  };
}
