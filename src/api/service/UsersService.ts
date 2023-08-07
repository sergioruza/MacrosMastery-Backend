import User from '@/src/database/models/UserModel';
import { ModelStatic } from 'sequelize';
import IUser from '../interfaces/User';
import { BadRequestError } from '../helpers/api-erros';
import bcrypt from 'bcrypt';

export default class UsersService {
  protected model: ModelStatic<User> = User;

  async getUsers(): Promise<IUser[]> {
    const users = await this.model.findAll();
    return users;
  }

  async create({ name, username, email, password }: IUser): Promise<IUser> {
    const hasUserWithEmail = await this.model.findOne({ where: { email } });

    if (hasUserWithEmail) {
      throw new BadRequestError('Email already exists');
    }

    const hashPass = await bcrypt.hash(password, 10);
    const createUser = await this.model.create({ name, username, email, password: hashPass });
    return createUser;
  }
}