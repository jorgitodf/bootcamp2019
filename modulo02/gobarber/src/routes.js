import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

/* routes.get('/', async (req, res) => {
    const user = await User.create({
        name: 'Jorgito da Silva Paiva',
        email: 'jorgito@gmail.com',
        password_hash: '123456',
    });

    return res.json(user);
}); */

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
