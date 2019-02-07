import { Router } from 'express';
import { createOne, getOne, getMany } from './competition.controllers';

const router = Router();

router
  .route('/')
  .get(getMany)
  .post(createOne);

router.route('/:id').get(getOne);

export default router;
