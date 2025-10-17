import { Request, Response } from 'express';
import { UsersRepository } from '../../repositories/users/UsersRepository';
import { FindAllUsersService } from '../../services/users/findAllUsersService';



class FindAllUsersController {
    async handle(request: Request, response: Response) {
        
        try {
            
            const usersRepository = new UsersRepository();
            const service = new FindAllUsersService(usersRepository);

            const result = await service.execute();

            return response.status(200).json(result);
        } catch (error: any) {
            return response.status(400).json({ message: error.message });
        }
    }
}

export default new FindAllUsersController();
