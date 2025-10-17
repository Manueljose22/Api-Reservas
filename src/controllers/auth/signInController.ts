import { Request, Response } from 'express';
import { UsersRepository } from '../../repositories/users/UsersRepository';
import { SignInService } from '../../services/auth/signInService';




class SignInController {
    async handle(request: Request, response: Response) {
        const { email, password } = request.body

        try {

            const userRep = new UsersRepository();
            const service = new SignInService(userRep);

            const result = await service.execute(email, password);

            return response.status(201).json(result)

        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
}

export default new SignInController;
