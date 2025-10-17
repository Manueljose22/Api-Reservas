import { Router } from 'express';
import bookingController from '../controllers/bookings/CreateBookingController';
import { ensuredAuthenticated } from '../middlewares/auth/ensuredAuthenticated';

const router = Router();

router.get('/bookings', bookingController.handle);
router.post('/booking/add', ensuredAuthenticated, bookingController.handle);


export { router as bookingRoutes};
