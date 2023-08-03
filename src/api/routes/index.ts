import { Request, Router, Response } from 'express';
import fs from 'fs';
import { ApiError } from '../helpers/api-erros';
import { BadRequestError } from '../middlewares/ErrorHandling';
const routes = Router();

export default routes.get('/teste', (req: Request, res: Response) => {
  throw new BadRequestError('erro try');

  return res.json('ok');
});
