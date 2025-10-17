import { Router } from 'express';
import createBookingController from '../controllers/bookings/CreateBookingController';
import { ensuredAuthenticated } from '../middlewares/auth/ensuredAuthenticated';
import findAllBookingsController from '../controllers/bookings/findAllBookingsController';
import findByIdBookingController from '../controllers/bookings/findByIdBookingController';
import findBookingByUserIdController from '../controllers/bookings/findBookingByUserIdController';
import cancelBookingController from '../controllers/bookings/cancelBookingController';
import updateBookingController from '../controllers/bookings/updateBookingController';


const router = Router();

router.post('/bookings/', ensuredAuthenticated, createBookingController.handle);
router.get('/bookings', ensuredAuthenticated, findAllBookingsController.handle);
router.get('/bookings/user', ensuredAuthenticated, findBookingByUserIdController.handle);
router.get('/bookings/:id', ensuredAuthenticated, findByIdBookingController.handle);
router.put('/bookings/cancel/:id', ensuredAuthenticated, cancelBookingController.handle);
router.put('/bookings/:id', ensuredAuthenticated, updateBookingController.handle);


export { router as bookingRoutes };
