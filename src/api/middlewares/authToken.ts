import { Response, NextFunction } from 'express';
import { UnauthorizedError } from '../helpers/api-erros';
import { verify } from 'jsonwebtoken';
import { IUserToken } from '../interfaces/User';
import { ITokenRequestUser } from '../interfaces/ITokenRequestUser';
const { JWT_SECRET } = process.env;

export default (req: ITokenRequestUser, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) throw new UnauthorizedError('Token not found');

  try {
    const payload = verify(token, JWT_SECRET as string) as IUserToken;
    req.user = payload;
    return next();
  } catch {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};
