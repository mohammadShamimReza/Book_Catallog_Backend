import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { CategoryController } from './Category.controller';
import { CategoryValidation } from './Category.validation';

const router = express.Router();

router.get('/', CategoryController.getAllFromDB);
router.get('/:id', CategoryController.getAllFromDB);
router.post('/create-category', CategoryController.insertIntoDB);
router.patch(
  '/:id',
  validateRequest(CategoryValidation.update),
  CategoryController.updateCategory,
);
router.delete('/:id', CategoryController.deleteCategory);

export const categoryRoutes = router;
