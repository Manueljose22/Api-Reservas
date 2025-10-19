import prisma from "../../config/prisma";
import { bookingCreateDTO, bookingSavedDTO, bookingUpdateTranstionDTO, IBookingsRepository } from "./IBookingsRepository";





export class BookingsRepository implements IBookingsRepository {

    async create({ clientId, newClientBalance, newProviderBalance, price, providerId, serviceId, dateBooking }: bookingCreateDTO): Promise<void> {

        await prisma.$transaction(async (tx) => {

            const booking = await tx.booking.create({
                data: {
                    price,
                    clientId,
                    providerId,
                    serviceId,
                    dateBooking
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
                    select: {
                        id: true,
                        name: true,
                        description: true,
                        price: true,
                        provider: {
                            select: {
                                user: {
                                    select: {
                                        fullname: true
                                    }
                                }, 
                                balance: true
                            }
                        } 
                    }
                },
                client: {
                    select:{
                        user: {
                            select:{
                                fullname: true
                            }
                        }
                    }
                }
            }
        });
        return bookings
    }

    async findAllByUser(userId: string): Promise<bookingSavedDTO[] | null> {

        const bookings = await prisma.booking.findMany({
            where: {
                OR: [
                    { clientId: userId },
                    { providerId: userId }
                ]
            },
            include: {
                service: {
                    select: {
                        id: true,
                        name: true,
                        description: true,
                        price: true,
                        provider: {
                            select: {
                                user: {
                                    select: {
                                        fullname: true
                                    }
                                }, 
                                balance: true
                            }
                        }
                    }
                },
                client: {
                    select:{
                        user: {
                            select:{
                                fullname: true
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
                    select: {
                        id: true,
                        name: true,
                        description: true,
                        price: true,
                        provider: {
                            select: {
                                user: {
                                    select: {
                                        fullname: true
                                    }
                                }, 
                                balance: true
                            }
                        }
                    }
                },
                client: {
                    select:{
                        user: {
                            select:{
                                fullname: true
                            }
                        }
                    }
                }
            }
        });
        return booking
    }


    async updateBookingData(bookingId: string, {dateBooking, status}: Pick<bookingUpdateTranstionDTO, "dateBooking" | "status"> ) {
        await prisma.booking.update({
            where: { id: bookingId },
            data:{
                dateBooking,
                status: status
            },
        });
    }


    async updateTransaction({ bookingId, status, refundAmount, clientId, providerId, }: Omit<bookingUpdateTranstionDTO, "dateBooking">): Promise<void> {

        await prisma.$transaction(async (tx) => {

            await tx.booking.update({
                where: { id: bookingId },
                data: { status },
            });

            await tx.client.update({
                where: { id: clientId },
                data: { balance: { increment: refundAmount } },
            });


            await tx.provider.update({
                where: { id: providerId },
                data: { balance: { decrement: refundAmount } },
            });
        });
    }

}