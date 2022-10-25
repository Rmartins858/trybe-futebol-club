import { Request, Response } from 'express';
import UserService from '../service/UserService';

const userService = new UserService();

export default class UserController {
  public makelogin = async (request: Request, response: Response) => {
    const { email, password } = request.body;
    const token = await userService.makelogin({ email, password });
    return response.status(200).json({ token });
  };
}
