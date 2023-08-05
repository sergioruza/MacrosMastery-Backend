import { Router } from 'express';
import UserController from '../controller/UsersController';

const routes = Router();

const usersController = new UserController();

routes.get('/users', (req, res) => usersController.getAllUsers(req, res));

export default routes;
