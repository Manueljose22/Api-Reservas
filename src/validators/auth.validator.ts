import { body } from 'express-validator';
import { validateRequest } from '../middlewares/validateRequest';



export const validateRegister = [
  body('email').isEmail().withMessage('email ivalido'),
  body('password').isLength({ min: 6 }).withMessage('Senha muito curta'),
  validateRequest
];

export const validateLogin = [
  body('email').isEmail().withMessage('email invalido'),
  body('password').isLength({ min: 6 }).withMessage('Senha muito curta'),
  validateRequest
];
