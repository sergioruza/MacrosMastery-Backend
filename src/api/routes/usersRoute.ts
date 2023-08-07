import { Router } from 'express';
import UserController from '../controller/UsersController';
import checkUserFields from '../middlewares/checkUserFields';

const routes = Router();

const usersController = new UserController();

routes.get('/users', (req, res) => usersController.getAllUsers(req, res));
routes.post('/user', checkUserFields, (req, res) => usersController.create(req, res));

export default routes;
