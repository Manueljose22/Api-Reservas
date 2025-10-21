import { BookingStatus } from "@prisma/client";

export type bookingCreateDTO = {
    clientId: string;
    serviceId: string;
    providerId: string;
    price: number;
    dateBooking: Date

}
export type bookingUpdateTranstionDTO = {
    clientId: string;
    serviceId: string;
    providerId: string;
    status: "CONFIRMED" | "COMPLETED" | "CANCELED"
    bookingId: string;
    refundAmount: number;
    dateBooking: Date
}

export type bookingSavedDTO = {
    service: {
        price: number;
        provider: {
            user: {
                fullname: string;
            };
            balance: number;
        };
        id: string;
        name: string;
        description: string | null;
    }
    client: {
        user: {
            fullname: string;
        };
    }
    id: string;
    price: number;
    status: BookingStatus;
    createdAt: Date;
    updatedAt: Date;
    clientId: string;
    serviceId: string;
    providerId: string;
    dateBooking: Date

}




export interface IBookingsRepository {
    create(data: bookingCreateDTO): Promise<bookingSavedDTO | void>
    findAll(): Promise<bookingSavedDTO[] | null>
    findAllByUser(clientId: string): Promise<bookingSavedDTO[] | null>
    findById(id: string): Promise<bookingSavedDTO | null>
    updateBookingData(bookingId: string, data: bookingUpdateTranstionDTO ): Promise<void>
    updateTransaction(data: bookingUpdateTranstionDTO): Promise<void>
}