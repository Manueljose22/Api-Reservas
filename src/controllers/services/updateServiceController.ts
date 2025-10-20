import { Request, Response } from 'express';
import { ServicesRepository } from '../../repositories/services/ServicesRepository';
import { UpdateServiceServices } from '../../services/services/updateServiceServices';




class UpdateServiceController {
    async handle(request: Request, response: Response) {
        const {userId} = request;
        const data = request.body;
        const {id} = request.params;
        
        try {

            const servicesRepository = new ServicesRepository();
            const service = new UpdateServiceServices(servicesRepository);

            await service.execute(id, userId, data);

            return response.status(200).json({message: "Serviço actulaizado"});

        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
}

export default new UpdateServiceController;