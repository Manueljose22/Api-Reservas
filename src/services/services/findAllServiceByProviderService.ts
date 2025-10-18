import { IServicesRepository, IServicesSavedDTO } from "../../repositories/services/IServicesRepository";



class FindAllServiceByProviderService {

    constructor(private iServicesRepository: IServicesRepository) { }

    async execute(userId: string): Promise<IServicesSavedDTO[] | null> {
        const services = await this.iServicesRepository.findAllByProvider(userId);
        return services
    }
}

export { FindAllServiceByProviderService };
