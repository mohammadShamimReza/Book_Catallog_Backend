import express from 'express';
import { AuthController } from './Auth.controller';

const router = express.Router();

router.post('/signup', AuthController.signUp);

export const authRoutes = router;
