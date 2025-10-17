import prisma from "../../config/prisma";
import { clientCreateDTO, clientSavedDTO, IClientsRepository } from "./IClientsRepository";





export class ClientsRepository implements IClientsRepository {

    async create(data: clientCreateDTO): Promise<void> {
        await prisma.client.create({
            data: {
                id: data.userId,
                balance: data.balance
            }
        })
    }

    async findAll(): Promise<clientSavedDTO[] | null> {
        const clients = await prisma.client.findMany({
            include:{
                user:{select:{fullname: true, email: true}},
                bookings: true
            }
        });
        return clients
    }

    async findById(id: string): Promise<clientSavedDTO | null> {
        const client = await prisma.client.findFirst({
            where: {
                id
            },
            include:{
                user:{select:{fullname: true, email: true}},
                bookings: true
            }
        });
        return client
    }

    async delete(id: string): Promise<void> {
        await prisma.client.delete({
            where: {
                id
            }
        })
    }

    async updateBalance(id: string, balance: number): Promise<void> {
        await prisma.client.update({
            where: {
                id
            },
            data: { balance: { increment: balance } },
        })
    }

}