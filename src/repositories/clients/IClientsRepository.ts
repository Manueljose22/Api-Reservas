import { BookingStatus } from "@prisma/client";


export type clientCreateDTO = {
    userId: string;
    balance: number;
}

export type clientSavedDTO = {
    id: string;
    balance: number;
    user: {
        fullname: string;
        email: string;
    };
    bookings: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        serviceId: string;
        providerId: string;
        price: number;
        status: BookingStatus;
    }[]
} | null






export interface IClientsRepository {
    findAll(): Promise<clientSavedDTO[] | null>
    findById(id: string): Promise<clientSavedDTO | null>
    delete(id: string): Promise<void>
    updateBalance(id: string, balance: number): Promise<void>
}