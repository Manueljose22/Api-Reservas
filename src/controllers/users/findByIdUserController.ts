import { Request, Response } from 'express';
import { UsersRepository } from '../../repositories/users/UsersRepository';
import { FindByIdUserService } from '../../services/users/findByIdUserService';



class FindByIdUserController {

    async handle(request: Request, response: Response) {
        const { id } = request.params;

        try {
            const usersRepository = new UsersRepository();
            const service = new FindByIdUserService(usersRepository);

            const result = await service.execute(id);

            return response.status(200).json(result);
        } catch (error: any) {
            return response.status(400).json({ message: error.message });
        }
    }
}

export default new FindByIdUserController();
