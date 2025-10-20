

export type IServicesCreateDTO = {
    name: string;
    description: string | null;
    price: number;
    providerId: string;
}


export type IServicesSavedDTO = {
    id: string;
    providerId: string;
    name: string;
    description: string | null;
    price: number;
    provider: {
        user: {
            fullname: string;
            email: string;
        };
    }
    createdAt: Date;
    updatedAt: Date;
}



export interface IServicesRepository {
    create(data: IServicesCreateDTO): Promise<void>
    findAll(): Promise<IServicesSavedDTO[] | null>
    findAllByProvider(userId: string): Promise<IServicesSavedDTO[] | null>
    findById(id: string): Promise<IServicesSavedDTO | null>
    findByname(providerId: string, name: string): Promise<IServicesSavedDTO | null>
    delete(id: string): Promise<void>
    update(serviceId: string, data: Omit <IServicesCreateDTO, 'providerId'>): Promise<void>

}