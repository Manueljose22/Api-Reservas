import { Router } from 'express';
import { ensuredAuthenticated } from '../middlewares/auth/ensuredAuthenticated';
import findAllUsersController from '../controllers/users/findAllUsersController';
import findByIdUserController from '../controllers/users/findByIdUserController';
import deleteUserController from '../controllers/users/deleteUserController';
import getProfileUserController from '../controllers/users/getProfileUserController';

const router = Router();

router.get('/users/profile', ensuredAuthenticated, getProfileUserController.handle);
router.get('/users', ensuredAuthenticated, findAllUsersController.handle);
router.get('/users/:id', ensuredAuthenticated, findByIdUserController.handle);
router.delete('/users/:id', ensuredAuthenticated, deleteUserController.handle);


export { router as usersRoutes };
