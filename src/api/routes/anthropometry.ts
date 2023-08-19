import { Router } from 'express';
import WeightHistoryController from '../controller/anthropometry/WeightHistoryController';

const routes = Router();

const usersController = new WeightHistoryController();

routes.post('/anthropometry-weight', (req, res) => usersController.create(req, res));

export default routes;
