import User from '@/src/database/models/UserModel';
import { ModelStatic } from 'sequelize';
import IUser from '../interfaces/User';

export default class UsersService {
  protected model: ModelStatic<User> = User;

  async getUsers(): Promise<IUser[]> {
    const users = await this.model.findAll();
    return users;
  }
}
