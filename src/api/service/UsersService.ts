import User from '@/src/database/models/UserModel';
import { ModelStatic } from 'sequelize';
import { IUser } from '../interfaces/User';
import { BadRequestError } from '../helpers/api-erros';
import bcrypt from 'bcrypt';
import generateToken from '../token/generateToken';

export default class UsersService {
  protected model: ModelStatic<User> = User;

  async getUsers(): Promise<IUser[]> {
    const users = await this.model.findAll();
    return users;
  }

  async create({ name, username, email, password }: IUser) {
    const hasUserWithEmail = await this.model.findOne({ where: { email } });

    if (hasUserWithEmail) {
      throw new BadRequestError('Email already exists');
    }

    const hashPass = await bcrypt.hash(password, 10);
    const createUser = await this.model.create({ name, username, email, password: hashPass });

    const token = generateToken({
      id: createUser.id,
      name: createUser.name,
      username: createUser.username,
      email: createUser.email,
    });

    return {
      user: { id: createUser.id, name: createUser.name, username: createUser.username, email: createUser.email },
      token,
    };
  }

  async login(email: string, password: string) {
    const user = await this.model.findOne({ where: { email } });

    if (!user) throw new BadRequestError('Invalid email or password');

    const verifypass = await bcrypt.compare(password, user.password);
    if (!verifypass) throw new BadRequestError('Invalid email or password');

    const token = generateToken({ id: user.id, name: user.name, username: user.username, email: user.email });

    return {
      user: { id: user.id, name: user.name, username: user.username, email: user.email },
      token,
    };
  }
}
