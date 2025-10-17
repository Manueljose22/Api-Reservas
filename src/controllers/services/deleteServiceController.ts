import { Request, Response } from 'express';
import { ServicesRepository } from '../../repositories/services/ServicesRepository';
import { DeleteService } from '../../services/services/deleteService';




class DeleteServiceController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        try {
            const servicesRepository = new ServicesRepository();
            const service = new DeleteService(servicesRepository);

            await service.execute(id);

            return response.status(200).json({ message: 'Serviço deletado com sucesso.' });
        } catch (error: any) {
            return response.status(400).json({ message: error.message });
        }
    }
}

export default new DeleteServiceController();
