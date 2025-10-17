import { Request, Response } from 'express';
import { UsersRepository } from '../../repositories/users/UsersRepository';
import { DeleteUserService } from '../../services/users/deleteUserService';



class DeleteUserController {
    
    
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        try {
            const usersRepository = new UsersRepository();
            const service = new DeleteUserService(usersRepository);

            await service.execute(id);

            return response.status(200).json({ message: 'Usuário deletado com sucesso.' });
        } catch (error: any) {
            return response.status(400).json({ message: error.message });
        }
    }
}

export default new DeleteUserController();
