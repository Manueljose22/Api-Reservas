

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
    findById(id: string): Promise<IServicesSavedDTO | null>
    findByname(name: string): Promise<IServicesSavedDTO | null>
    delete(id: string): Promise<void>
}