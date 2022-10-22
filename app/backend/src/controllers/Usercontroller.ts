import { Request, Response } from 'express';
import validateEmail from '../middlewares/schemas';
import UserService from '../service/UserService';

const userService = new UserService();

export default class UserController {
  public makelogin = async (request: Request, response: Response) => {
    const { email, password } = request.body;
    if (!email || !password) {
      return response
        .status(400)
        .json({ message: 'All fields must be filled' });
    }
    validateEmail(email);

    const token = await userService.makelogin({ email, password });
    return response.status(200).json({ token });
  };
}
