import { Request, Response, NextFunction } from 'express';
import IUser from '../interfaces/User';

const checkUserFields = (req: Request, res: Response, next: NextFunction) => {
  const { name, username, email, password } = req.body as IUser;

  if (!name || !username || !email || !password) {
    return res.status(400).json({ error: 'Campos name, username, email e password são obrigatórios.' });
  }

  next();
};

export default checkUserFields;
