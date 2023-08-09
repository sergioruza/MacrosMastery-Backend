import { Request, Response, NextFunction } from 'express';
import { IUser } from '../interfaces/User';
import { BadRequestError } from '../helpers/api-erros';

const checkUserFields = (req: Request, res: Response, next: NextFunction) => {
  const { name, username, email, password } = req.body as IUser;

  if (!name || !username || !email || !password) {
    throw new BadRequestError('Campos name, username, email e password são obrigatórios.');
  }

  return next();
};

export default checkUserFields;
