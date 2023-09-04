import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { UserController } from './User.controller';
import { UserValidation } from './User.validation';

const router = express.Router();

router.get('/', UserController.getAllFromDB);
router.get('/:id', UserController.getAllFromDB);
router.patch(
  '/:id',
  validateRequest(UserValidation.update),
  UserController.updateUser,
);
router.delete('/:id', UserController.deleteUser);

export const userRoutes = router;
