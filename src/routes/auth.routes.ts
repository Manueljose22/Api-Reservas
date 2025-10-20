import { Router } from 'express';
import { validateRegister} from '../validators/auth.validator';
import signUpController from '../controllers/auth/signUpController';
import signInController from '../controllers/auth/signInController';

const router = Router();



router.post('/auth/signUp', validateRegister, signUpController.handle);
router.post('/auth/signIn', signInController.handle);


export {router as authRoutes};
