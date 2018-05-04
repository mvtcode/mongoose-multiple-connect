'use strict';

import express from 'express';
import HomeController from './controllers/HomeController';
import UsersController from './controllers/UsersController';
// import ScoresController from './controllers/ScoresController';
const routes = express.Router();

routes.get('/users', UsersController.list);
routes.get('/users/:id', UsersController.detail);
routes.post('/users', UsersController.insert);
routes.post('/users/:id', UsersController.update);
routes.delete('/users/:id', UsersController.remove);

routes.all('/', HomeController.home);

export default routes;