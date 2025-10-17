import { IServicesRepository, IServicesSavedDTO } from "../../repositories/services/IServicesRepository";



class FindAllServicesService {

    constructor(private iServicesRepository: IServicesRepository) { }

    async execute(): Promise<IServicesSavedDTO[] | null> {
        const services = await this.iServicesRepository.findAll();

        return services
    }
}

export { FindAllServicesService };
