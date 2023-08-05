import { Request, Response } from 'express';
import UsersService from '../service/UsersService';

export default class UserController {
  private _usersService: UsersService = new UsersService();
  // async create(req: Request, res: Response) {
  //   const { name, email, password, username } = req.body;
  // }

  async getAllUsers(req: Request, res: Response) {
    const users = await this._usersService.getUsers();

    return res.status(200).json(users);
  }
}
