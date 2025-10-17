import { IServicesRepository, IServicesSavedDTO } from "../../repositories/services/IServicesRepository";





class createServiceService {

    constructor(private IServiceRepository: IServicesRepository) { }

    async execute(): Promise<Error | IServicesSavedDTO> {
        

    }
}

export { createServiceService };