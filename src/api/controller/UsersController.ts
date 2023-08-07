import { Request, Response } from 'express';
import UsersService from '../service/UsersService';
import IUser from '../interfaces/User';

export default class UserController {
  private _usersService: UsersService = new UsersService();
  // async create(req: Request, res: Response) {
  //   const { name, email, password, username } = req.body;
  // }

  async getAllUsers(req: Request, res: Response) {
    const users = await this._usersService.getUsers();

    return res.status(200).json(users);
  }

  async create(req: Request, res: Response) {
    const { name, email, password, username } = req.body as IUser;

    const userCreate = await this._usersService.create({ name, email, password, username });

    return res.status(201).json(userCreate);
  }
}
