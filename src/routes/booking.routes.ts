import { Router } from 'express';
import createBookingController from '../controllers/bookings/CreateBookingController';
import { ensuredAuthenticated } from '../middlewares/auth/ensuredAuthenticated';
import findAllBookingsController from '../controllers/bookings/findAllBookingsController';
import findByIdBookingController from '../controllers/bookings/findByIdBookingController';
import deleteBookingController from '../controllers/bookings/deleteBookingController';
import findBookingByUserIdController from '../controllers/bookings/findBookingByUserIdController';


const router = Router();

router.post('/bookings/', ensuredAuthenticated, createBookingController.handle);
router.get('/bookings', ensuredAuthenticated, findAllBookingsController.handle);
router.get('/bookings/user', ensuredAuthenticated, findBookingByUserIdController.handle);
router.get('/bookings/:id', ensuredAuthenticated, findByIdBookingController.handle);
router.delete('/bookings/:id', ensuredAuthenticated, deleteBookingController.handle);


export { router as bookingRoutes};
