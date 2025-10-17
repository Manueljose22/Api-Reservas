import { IServicesRepository, servicesCreateDTO, servicesSavedDTO } from "./IServicesRepository";





export class ServicesRepository implements IServicesRepository {
    
    async create(data: servicesCreateDTO): Promise<servicesCreateDTO | void> {
        throw new Error("Method not implemented.");
    }
    
    async findAll(): Promise<servicesSavedDTO[] | null> {
        throw new Error("Method not implemented.");
    }
    
    async findById(id: string): Promise<servicesSavedDTO | null> {
        throw new Error("Method not implemented.");
    }
    
    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    

}