import prisma from "../../config/prisma";
import { IServicesRepository, IServicesCreateDTO, IServicesSavedDTO } from "./IServicesRepository";




export class ServicesRepository implements IServicesRepository {
    
    async update(serviceId: string, data: IServicesCreateDTO): Promise<void> {
        await prisma.service.update({
            where:{
                id: serviceId
            },
            data: data
        })
    }
    
    async findAllByProvider(userId: string): Promise<IServicesSavedDTO[] | null> {
        const services = await prisma.service.findMany(
            {
                where:{
                    providerId: userId
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

        return services;
    }
    
    async findByname(providerId: string, name: string): Promise<IServicesSavedDTO | null> {
        const service = await prisma.service.findFirst(
            {
                where: {
                    name: name,
                    providerId: providerId
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

    async create({ providerId, description, price, name }: IServicesCreateDTO): Promise<void> {

        await prisma.service.create({
            data: {
                name,
                description,
                price: Number(price),
                providerId
            }
        })

    }

    async findAll(): Promise<IServicesSavedDTO[] | null> {
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

    async findById(id: string): Promise<IServicesSavedDTO | null> {
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