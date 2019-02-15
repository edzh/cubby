import { Router } from 'express';
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
  .post(createOne);

router
  .route('/:id')
  .get(getOne)
  .delete(removeOne);

export default router;
