import { Request, Router, Response } from 'express';
import fs from 'fs';
import { ApiError } from '../helpers/api-erros';
const routes = Router();

export default routes.get('/teste', (req: Request, res: Response) => {
  throw new Error('erro try');

  return res.json('ok');
});
