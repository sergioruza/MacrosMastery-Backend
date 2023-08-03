import { Request, Router, Response } from 'express';
const routes = Router();

export default routes.get('/teste', (req: Request, res: Response) => {
  return res.json('ok');
});
