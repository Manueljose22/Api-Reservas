import { Request, Response } from 'express';
import { ServicesRepository } from '../../repositories/services/ServicesRepository';
import { createServiceService } from '../../services/services/createServiceService';
import { IServicesCreateDTO } from '../../repositories/services/IServicesRepository';




class CreateServiceController {
    async handle(request: Request, response: Response) {
        const data = request.body as IServicesCreateDTO;
        const {userId} = request;

        data.providerId = userId!;

        try {

            const serviceRep = new ServicesRepository();
            const service = new createServiceService(serviceRep);

            const result = await service.execute(data)

            return response.status(201).json({ message: "Serviço criado com sucesso." })

        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
}

export default new CreateServiceController;