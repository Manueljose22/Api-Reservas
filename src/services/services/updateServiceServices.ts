import { IServicesCreateDTO, IServicesRepository } from "../../repositories/services/IServicesRepository";





class UpdateServiceServices {

   constructor(private iServicesRepository: IServicesRepository) { }

    async execute(serviceId: string ,userId: string, data: IServicesCreateDTO): Promise<Error| void> {
        const service = await this.iServicesRepository.findById(serviceId);
        
        if (!service) {
            throw new Error("Serviço não existe.");
        } 

        if (userId !== service.providerId) {
            throw new Error("Erro no sistema, por tente mais tarde.");
        }

        const updateService =  {
            name: data.name ?? service.name,
            description: data.description ?? service.description,
            price: Number(data.price) ?? Number(data.price)
        }

        this.iServicesRepository.update(serviceId, updateService);
    }
}

export { UpdateServiceServices };