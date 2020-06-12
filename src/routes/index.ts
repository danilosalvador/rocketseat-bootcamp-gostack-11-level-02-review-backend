import { Router } from 'express';
import registerRouter from './registers.routes';

const routes = Router();

routes.use('/registers', registerRouter);

export default routes;
