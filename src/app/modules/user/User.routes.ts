import express from 'express';
import { UserController } from './User.controller';

const router = express.Router();

router.get('/', UserController.getAllFromDB);
router.get('/:id', UserController.getAllFromDB);

export const userRoutes = router;
