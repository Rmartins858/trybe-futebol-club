import bcrypt = require('bcryptjs');
import TokenManager from '../helpers/TokenManager';
import UserModel from '../database/models/UsersModel';
import HttpException from '../shared/http.exeption';

interface IRequest {
  email: string;
  password: string;
}

export default class UserService {
  public makelogin = async ({ email, password }: IRequest) => {
    const userDataValues = await UserModel.findOne({
      where: { email },
    });

    if (!userDataValues) {
      throw new HttpException(401, 'Incorrect email or password');
    }
    const validPass = await bcrypt.compare(password, userDataValues.password);

    if (!validPass) {
      throw new HttpException(401, 'Incorrect email or password');
    }

    if (validPass) {
      const token = TokenManager.makeToken(userDataValues);
      return token;
    }
  };
}
