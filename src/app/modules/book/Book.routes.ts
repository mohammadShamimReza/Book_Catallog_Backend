import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { BookController } from './Book.controller';
import { BookValidation } from './Book.validation';

const router = express.Router();

router.get('/', BookController.getAllFromDB);
router.get('/:id', BookController.getById);
router.get('/:categoryId/category', BookController.getByCategoryId);

router.post(
  '/create-book',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(BookValidation.create),
  BookController.insertIntoDB,
);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(BookValidation.update),
  BookController.updateBook,
);
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), BookController.deleteBook);

export const bookRoutes = router;
