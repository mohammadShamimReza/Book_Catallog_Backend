import express from 'express';
import { authRoutes } from '../modules/auth/Auth.routes';
import { userRoutes } from '../modules/user/User.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    routes: authRoutes,
  },
  {
    path: '/users',
    routes: userRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
