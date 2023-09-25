import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { UserController } from './User.controller';
import { UserValidation } from './User.validation';

const router = express.Router();

router.get('/:id', auth(ENUM_USER_ROLE.ADMIN), UserController.getById);

router.get('/', auth(ENUM_USER_ROLE.ADMIN), UserController.getAllFromDB);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(UserValidation.update),
  UserController.updateUser,
);
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), UserController.deleteUser);

export const userRoutes = router;
