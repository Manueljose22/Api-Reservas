import { Request, Response } from 'express';
import { ServicesRepository } from '../../repositories/services/ServicesRepository';
import { FindAllServicesService } from '../../services/services/findAllServicesService';



class FindAllServicesController {
    
    async handle(request: Request, response: Response) {
       
        try {
        
            const servicesRepository = new ServicesRepository();
            const service = new FindAllServicesService(servicesRepository);

            const result = await service.execute();

            return response.status(200).json(result);
        } catch (error: any) {
            return response.status(400).json({ message: error.message });
        }
    }
}

export default new FindAllServicesController();
