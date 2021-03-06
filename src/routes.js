import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import NotificationController from './app/controllers/NotificationController';

import SmsTestController from './app/controllers/SmsTestController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.post('/send-sms-test', SmsTestController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.put('/notifications', NotificationController.store)

export default routes