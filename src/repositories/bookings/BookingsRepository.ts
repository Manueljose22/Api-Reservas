import prisma from "../../config/prisma";
import { bookingCreateDTO, bookingSavedDTO, IBookingsRepository } from "./IBookingsRepository";





export class BookingsRepository implements IBookingsRepository {

    async create(data: bookingCreateDTO): Promise<void> {
        await prisma.booking.create({
            data: {
                clientId: data.clientId,
                serviceId: data.serviceId,
                providerId: data.providerId,
                price: data.price
            }
        })
    }

    async findAll(): Promise<bookingSavedDTO[] | null> {
        const bookings = await prisma.booking.findMany({
            include: {
                service: true
            }
        });
        return bookings
    }

    async findAllByProvider(providerId: string): Promise<bookingSavedDTO[] | null> {
        const bookings = await prisma.booking.findMany({
            where: {
                providerId
            },
            include: {
                service: true
            }
        });
        return bookings
    }

    async findAllByClient(clientId: string): Promise<bookingSavedDTO[] | null> {
        const bookings = await prisma.booking.findMany({
            where: {
                clientId
            },
            include: {
                service: true
            }
        });
        return bookings
    }

    async findById(id: string): Promise<bookingSavedDTO | null> {
        const booking = await prisma.booking.findFirst({
            where: {
                id
            },
            include: {
                service: true
            }
        });
        return booking
    }

    async delete(id: string): Promise<void> {
        await prisma.booking.delete({
            where: {
                id
            }
        })
    }

}