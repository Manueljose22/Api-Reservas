

export type bookingCreateDTO = {
    id: string;
    clientId: string;
    serviceId: string;
    status: string;
    providerId: string
    price: number

}

export type bookingSavedDTO = {

}



export interface IBookingsRepository {
    create(data: bookingCreateDTO): Promise<bookingSavedDTO | void>
    findAll(): Promise<bookingSavedDTO[] | null>
    findAllByProvider(barbershopId: string): Promise<bookingSavedDTO[] | null>
    findById(id: string): Promise<bookingSavedDTO | null>
    delete(id: string): Promise<void>
}