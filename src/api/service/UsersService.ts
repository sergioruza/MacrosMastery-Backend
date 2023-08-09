import User from '@/src/database/models/UserModel';
import { ModelStatic } from 'sequelize';
import { IUser, IUserResponse } from '../interfaces/User';
import { BadRequestError, NotFoundError, UnauthorizedError } from '../helpers/api-erros';
import bcrypt from 'bcrypt';

export default class UsersService {
  protected model: ModelStatic<User> = User;

  async getUsers(): Promise<IUser[]> {
    const users = await this.model.findAll();
    return users;
  }

  async create({ name, username, email, password }: IUser): Promise<IUserResponse> {
    const hasUserWithEmail = await this.model.findOne({ where: { email } });

    if (hasUserWithEmail) {
      throw new BadRequestError('Email already exists');
    }

    const hashPass = await bcrypt.hash(password, 10);
    const createUser = await this.model.create({ name, username, email, password: hashPass });
    return { id: createUser.id, name: createUser.name, username: createUser.username, email: createUser.email };
  }

  async login(email: string, password: string) {
    const user = await this.model.findOne({ where: { email } });

    if (!user) throw new BadRequestError('Invalid email or password');

    const verifypass = await bcrypt.compare(password, user.password);
    if (!verifypass) throw new BadRequestError('Invalid email or password');
  }
}
