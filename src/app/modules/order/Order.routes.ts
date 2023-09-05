import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { OrderController } from './Order.controller';
import { OrderValidation } from './Order.validation';

const router = express.Router();

router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  OrderController.getAllFromDB,
);
router.get('/', OrderController.getAllFromDB);
router.get(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  OrderController.getById,
);
router.post(
  '/create-order',
  auth(ENUM_USER_ROLE.CUSTOMER),

  validateRequest(OrderValidation.create),
  OrderController.createOrder,
);

export const orderRoutes = router;
