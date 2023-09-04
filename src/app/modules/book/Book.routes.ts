import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { BookController } from './Book.controller';
import { BookValidation } from './Book.validation';

const router = express.Router();

router.get('/', BookController.getAllFromDB);
router.get('/:id', BookController.getAllFromDB);
router.post(
  '/create-book',
  validateRequest(BookValidation.create),
  BookController.insertIntoDB,
);
router.patch(
  '/:id',
  validateRequest(BookValidation.update),
  BookController.updateBook,
);
router.delete('/:id', BookController.deleteBook);

export const bookRoutes = router;
