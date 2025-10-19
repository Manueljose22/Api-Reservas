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
        price: number;
        provider: {
            user: {
                fullname: string;
            };
        };
        id: string;
        name: string;
        description: string | null;
    }
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
    findAllByUser(clientId: string): Promise<bookingSavedDTO[] | null>
    findById(id: string): Promise<bookingSavedDTO | null>
    cancelBooking(id: string): Promise<void>
    update(serviceId: string, data: bookingCreateDTO): Promise<void>
}