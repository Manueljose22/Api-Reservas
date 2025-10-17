import { IServicesRepository, IServicesSavedDTO } from "../../repositories/services/IServicesRepository";



class FindByIdService {

    constructor(private iServicesRepository: IServicesRepository) { }

    async execute(id: string): Promise<IServicesSavedDTO | Error> {
        const service = await this.iServicesRepository.findById(id);

        if (!service) {
            throw new Error("Serviço não encontrado.");
        }

        return service
    }
}

export { FindByIdService };
