import { Request, Response } from 'express';
import { UsersRepository } from '../../repositories/users/UsersRepository';
import { signUpService } from '../../services/auth/signUpService';




class SignUpController {
    async handle(request: Request, response: Response) {
        const data = request.body
        
        try {

            const userRep = new UsersRepository();
            const service = new signUpService(userRep);

            const result = await service.execute(data);

            return response.status(201).json(result)

        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
}

export default new SignUpController;
