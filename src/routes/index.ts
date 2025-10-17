import { Router } from 'express';
import { bookingRoutes } from './booking.routes';
import { authRoutes } from './auth.routes';


const router = Router();


router.use(authRoutes);
router.use(bookingRoutes);



export default router;
