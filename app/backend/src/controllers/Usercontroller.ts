import { Request, Response } from 'express';

import UserService from '../service/UserService';

export default class UserController {
  userService: UserService;
  constructor() {
    this.userService = new UserService();
  }

  public makelogin = async (request: Request, response: Response) => {
    const { email, password } = request.body;
    const token = await this.userService.makelogin({ email, password });
    return response.status(200).json({ token });
  };
}
