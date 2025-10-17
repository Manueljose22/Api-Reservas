import { Router } from 'express';
import { ensuredAuthenticated } from '../middlewares/auth/ensuredAuthenticated';
import findAllClientsController from '../controllers/clients/findAllClientsController';
import findByIdClientController from '../controllers/clients/findByIdClientController';
import deleteClientController from '../controllers/clients/deleteClientController';


const router = Router();



router.get('/clients', ensuredAuthenticated, findAllClientsController.handle);
router.get('/clients/:id', ensuredAuthenticated, findByIdClientController.handle);
router.delete('/clients/:id', ensuredAuthenticated, deleteClientController.handle);


export { router as clientsRoutes };
