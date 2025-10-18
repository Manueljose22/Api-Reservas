import prisma from "../../config/prisma";
import { bookingCreateDTO, bookingSavedDTO, IBookingsRepository } from "./IBookingsRepository";





export class BookingsRepository implements IBookingsRepository {

    async create({ clientId, newClientBalance, newProviderBalance, price, providerId, serviceId }: bookingCreateDTO): Promise<void> {

        await prisma.$transaction(async (tx) => {

            const booking = await tx.booking.create({
                data: {
                    price,
                    clientId,
                    providerId,
                    serviceId
                }
            });

            await tx.client.update({
                where: { id: clientId },
                data: { balance: newClientBalance },
            });

            await tx.provider.update({
                where: { id: providerId },
                data: { balance: newProviderBalance },
            });

            return booking;
        });
    }


    async findAll(): Promise<bookingSavedDTO[] | null> {
        const bookings = await prisma.booking.findMany({
            include: {
                service: {
                    select:{
                        id: true,
                        name: true,
                        description: true,
                        price: true,
                        provider:{
                            select:{
                                user:{
                                    select:{
                                        fullname: true
                                    }
                                }
                            }
                        }
                    }
                }
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
                service: {
                    select:{
                        id: true,
                        name: true,
                        description: true,
                        price: true,
                        provider:{
                            select:{
                                user:{
                                    select:{
                                        fullname: true
                                    }
                                }
                            }
                        }
                    }
                }
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
                service: {
                    select:{
                        id: true,
                        name: true,
                        description: true,
                        price: true,
                        provider:{
                            select:{
                                user:{
                                    select:{
                                        fullname: true
                                    }
                                }
                            }
                        }
                    }
                }
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
                service: {
                    select:{
                        id: true,
                        name: true,
                        description: true,
                        price: true,
                        provider:{
                            select:{
                                user:{
                                    select:{
                                        fullname: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
        return booking
    }

    async cancelBooking(id: string): Promise<void> {
        await prisma.booking.update({
            where: {
                id
            },
            data: {
                status: "CANCELED"
            }
        })
    }

    async update(serviceId: string, data: bookingCreateDTO): Promise<void> {
        await prisma.$transaction(async (tx) => {
            await tx.booking.update({
                where: {
                    id: serviceId
                },
                data: {
                    price: data.price,
                    clientId: data.clientId,
                    providerId: data.providerId,
                }
            });

            await tx.client.update({
                where: { id: data.clientId },
                data: { balance: data.newClientBalance },
            });

            await tx.provider.update({
                where: { id: data.providerId },
                data: { balance: data.newProviderBalance },
            });
        });
    }

}