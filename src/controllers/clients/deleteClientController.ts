import { Request, Response } from 'express';
import { ClientsRepository } from '../../repositories/clients/ClientsRepository';
import { DeleteClientService } from '../../services/clients/deleteClientService';




class DeleteClientController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        try {
            const clientsRepository = new ClientsRepository();
            const service = new DeleteClientService(clientsRepository);

            await service.execute(id);

            return response.status(200).json({ message: 'Cliente deletado com sucesso.' });
        } catch (error: any) {
            return response.status(400).json({ message: error.message });
        }
    }
}

export default new DeleteClientController();
