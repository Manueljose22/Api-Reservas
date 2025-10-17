import { Request, Response } from 'express';
import { UsersRepository } from '../../repositories/users/UsersRepository';
import { GetProfileUserService } from '../../services/users/getProfileUserService';




class getProfileUserController {

    async handle(request: Request, response: Response) {
        const { userId } = request;

        try {
            const usersRepository = new UsersRepository();
            const findByIdClientService = new GetProfileUserService(usersRepository);

            const result = await findByIdClientService.execute(userId);

            return response.status(200).json(result);
            
        } catch (error: any) {
            return response.status(400).json({ message: error.message });
        }
    }
}

export default new getProfileUserController();
