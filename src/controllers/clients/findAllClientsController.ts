import { Request, Response } from 'express';
import { ClientsRepository } from '../../repositories/clients/ClientsRepository';
import { FindAllClientsService } from '../../services/clients/findAllClientsService';




class FindAllClientsController {
    async handle(request: Request, response: Response) {
        try {
            const clientsRepository = new ClientsRepository();
            const findAllClientsService = new FindAllClientsService(clientsRepository);

            const result = await findAllClientsService.execute();

            return response.status(200).json(result);
        } catch (error: any) {
            return response.status(400).json({ message: error.message });
        }
    }
}

export default new FindAllClientsController();
