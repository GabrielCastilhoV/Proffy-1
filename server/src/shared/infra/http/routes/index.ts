import express from 'express';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';
import sessionRouter from '@modules/users/infra/http/routes/sessions.routes';
import userRouter from '@modules/users/infra/http/routes/users.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';

const routes = express.Router();

routes.use('/users', userRouter);
routes.use('/password', passwordRouter);
routes.use('/sessions', sessionRouter);
routes.use('/profile', profileRouter);

export default routes;
