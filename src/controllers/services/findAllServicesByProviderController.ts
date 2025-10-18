import { Request, Response } from 'express';
import { ServicesRepository } from '../../repositories/services/ServicesRepository';
import { FindAllServiceByProviderService } from '../../services/services/findAllServiceByProviderService';




class FindAllServicesByProviderController {
    
    async handle(request: Request, response: Response) {
       const {id} = request.params;
        try {
        
            const servicesRepository = new ServicesRepository();
            const service = new FindAllServiceByProviderService(servicesRepository);

            const result = await service.execute(id);

            return response.status(200).json(result);
        } catch (error: any) {
            return response.status(400).json({ message: error.message });
        }
    }
}

export default new FindAllServicesByProviderController();
