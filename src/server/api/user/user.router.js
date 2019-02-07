import { Router } from 'express';
import { me, updateMe, findAll } from './user.controllers';

const router = Router();

router.get('/', me);
router.put('/', updateMe);

export default router;
