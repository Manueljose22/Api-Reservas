import { BookingStatus } from "@prisma/client";

export type bookingCreateDTO = {
    clientId: string;
    serviceId: string;
    providerId: string;
    price: number;
    newClientBalance: number;
    newProviderBalance: number;

}

export type bookingSavedDTO = {
    service: {
        id: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
        providerId: string;
        name: string;
        description: string | null;
    };
    id: string;
    price: number;
    status: BookingStatus;
    createdAt: Date;
    updatedAt: Date;
    clientId: string;
    serviceId: string;
    providerId: string;
}




export interface IBookingsRepository {
    create(data: bookingCreateDTO): Promise<bookingSavedDTO | void>
    findAll(): Promise<bookingSavedDTO[] | null>
    findAllByProvider(providerId: string): Promise<bookingSavedDTO[] | null>
    findAllByClient(clientId: string): Promise<bookingSavedDTO[] | null>
    findById(id: string): Promise<bookingSavedDTO | null>
    delete(id: string): Promise<void>
}