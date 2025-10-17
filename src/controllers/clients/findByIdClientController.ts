import { Request, Response } from 'express';
import { ClientsRepository } from '../../repositories/clients/ClientsRepository';
import { FindByIdClientService } from '../../services/clients/findByIdClientService';





class FindByIdClientController {

    async handle(request: Request, response: Response) {
        const { id } = request.params;

        try {
            const clientsRepository = new ClientsRepository();
            const service = new FindByIdClientService(clientsRepository);

            const result = await service.execute(id);

            return response.status(200).json(result);
            
        } catch (error: any) {
            return response.status(400).json({ message: error.message });
        }
    }
}

export default new FindByIdClientController();
