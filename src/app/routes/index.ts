import express from 'express';

const academicSemeterRoutes = () => {};
const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semesters',
    routes: academicSemeterRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
