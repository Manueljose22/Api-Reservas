import { IServicesCreateDTO, IServicesRepository } from "../../repositories/services/IServicesRepository";





class createServiceService {

    constructor(private IServiceRepository: IServicesRepository) { }

    async execute(data: IServicesCreateDTO): Promise<Error | void> {
        const service = await this.IServiceRepository.findByname(data.name);

        if (service) {
            throw new Error("Serviço já existe.");
        }

        if (!data.name) {
            throw new Error("Informe o nome do serviço");
        } else if (!data.price) {
            throw new Error("Informe o valor do serviço");
        }

        await this.IServiceRepository.create(data)
    }
}

export { createServiceService };