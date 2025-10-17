

export type servicesCreateDTO = {
    id: string;
    title: string;
    description: string | null;
    price: number;
    barbershopId: string;
}


export type servicesSavedDTO = {

}



export interface IServicesRepository {
    create(data: servicesCreateDTO): Promise<servicesCreateDTO | void>
    findAll(): Promise<servicesSavedDTO[] | null>
    findById(id: string): Promise<servicesSavedDTO | null>
    delete(id: string): Promise<void>
}