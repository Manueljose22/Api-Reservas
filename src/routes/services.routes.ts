import { Router } from 'express';
import { ensuredAuthenticated } from '../middlewares/auth/ensuredAuthenticated';
import createServiceController from '../controllers/services/createServiceController';
import findAllServicesController from '../controllers/services/findAllServicesController';
import findByIdServiceController from '../controllers/services/findByIdServiceController';
import deleteServiceController from '../controllers/services/deleteServiceController';
import findAllServicesByProviderController from '../controllers/services/findAllServicesByProviderController';
import updateServiceController from '../controllers/services/updateServiceController';


const router = Router();



router.post("/services/", ensuredAuthenticated, createServiceController.handle);
router.get("/services/", ensuredAuthenticated, findAllServicesController.handle);
router.get("/services/provider/:id", ensuredAuthenticated, findAllServicesByProviderController.handle);
router.get("/services/:id", ensuredAuthenticated, findByIdServiceController.handle);
router.put("/services/:id", ensuredAuthenticated, updateServiceController.handle)
router.delete("/services/:id", ensuredAuthenticated, deleteServiceController.handle);


export {router as servicesRoutes};