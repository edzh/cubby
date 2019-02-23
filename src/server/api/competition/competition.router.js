import { Router } from 'express';
import { protect } from '../../utils/auth';
import {
  createOne,
  getOne,
  getMany,
  removeOne
} from './competition.controllers';

const router = Router();

router
  .route('/')
  .get(getMany)
  .post(protect, createOne);

router
  .route('/:id')
  .get(getOne)
  .delete(removeOne);

export default router;
