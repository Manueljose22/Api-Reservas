import { Router } from 'express';
import { bookingRoutes } from './booking.routes';
import { authRoutes } from './auth.routes';
import { servicesRoutes } from './services.routes';
import { usersRoutes } from './users.routes';
import { clientsRoutes } from './clients.routes';


const router = Router();


router.use(authRoutes);
router.use(bookingRoutes);
router.use(servicesRoutes);
router.use(usersRoutes);
router.use(clientsRoutes);



export default router;
