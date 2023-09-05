import express from 'express';
import { authRoutes } from '../modules/auth/Auth.routes';
import { bookRoutes } from '../modules/book/Book.routes';
import { categoryRoutes } from '../modules/category/Category.routes';
import { orderRoutes } from '../modules/order/Order.routes';
import { profileRoutes } from '../modules/profile/Profile.routes';
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
  {
    path: '/categories',
    routes: categoryRoutes,
  },
  {
    path: '/books',
    routes: bookRoutes,
  },
  {
    path: '/orders',
    routes: orderRoutes,
  },
  {
    path: '/profile',
    routes: profileRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
