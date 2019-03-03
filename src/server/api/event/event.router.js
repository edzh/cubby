import { Router } from 'express';
import { protect } from '../../utils/auth';
import { createOne, getMany } from './event.controllers';

const router = Router();

router
  .route('/')
  .get(getMany)
  .post(protect, createOne);

export default router;
