import {
  testConnectivity,
  testAuthenticity,
} from './../controllers/test-connectivity';
import { Router } from 'express';
const router = Router();
router.get('/connectivity', testConnectivity);
router.get('/authenticity', testAuthenticity);

export default router;
export const testRouter = router;
