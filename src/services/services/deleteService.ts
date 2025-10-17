import { IServicesRepository } from "../../repositories/services/IServicesRepository";



class DeleteService {

    constructor(private iServicesRepository: IServicesRepository) { }

    async execute(id: string): Promise<void | Error> {
        const service = await this.iServicesRepository.findById(id);

        if (!service) {
            throw new Error("Serviço não encontrado.");
        }

        await this.iServicesRepository.delete(id)
    }
}

export { DeleteService };
