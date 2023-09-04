import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { AuthController } from './Auth.controller';
import { AuthValidation } from './Auth.validation';

const router = express.Router();

router.post(
  '/signup',
  validateRequest(AuthValidation.create),
  AuthController.signUp,
);

export const authRoutes = router;
