import { sign } from 'jsonwebtoken';
import { IUserToken } from '../interfaces/User';

const { JWT_SECRET } = process.env;

const generateToken = (payload: IUserToken) => {
  const token = sign(payload, JWT_SECRET as string, { expiresIn: '8h' });

  return token;
};

export default generateToken;
