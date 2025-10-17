import prisma from "../../config/prisma";
import { IServicesRepository, servicesCreateDTO, servicesSavedDTO } from "./IServicesRepository";




export class ServicesRepository implements IServicesRepository {

    async create({ providerId, description, price, title }: servicesCreateDTO): Promise<servicesCreateDTO> {
        return await prisma.service.create({
            data: {
                title,
                description,
                price,
                providerId
            }
        })
    }

    async findAll(): Promise<servicesSavedDTO[] | null> {
        const services = await prisma.service.findMany(
            {
                include: {
                    provider: {
                        select: {
                            user: {
                                select: {
                                    fullname: true,
                                    email: true
                                }
                            }
                        }
                    }
                }
            }
        )

        return services
    }

    async findById(id: string): Promise<servicesSavedDTO | null> {
        const service = await prisma.service.findFirst(
            {
                where: {
                    id
                },
                include: {
                    provider: {
                        select: {
                            user: {
                                select: {
                                    fullname: true,
                                    email: true
                                }
                            }
                        }
                    }
                }
            }
        )

        return service
    }

    async delete(id: string): Promise<void> {
        await prisma.service.delete({
            where: {
                id
            }
        })
    }



}