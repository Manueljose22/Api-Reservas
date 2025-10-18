import { Role } from "@prisma/client";
import prisma from "../../config/prisma";
import { IUserCreateDTO, IUserSavedDTO, IUsersRepository } from "./IUsersRepository";





export class UsersRepository implements IUsersRepository {
    
    async create({ fullname, balance, email, nif, password, role }: IUserCreateDTO): Promise<IUserSavedDTO> {
      
        const user = await prisma.user.create({
            data: {
                email: email,
                fullname: fullname,
                nif: nif,
                password: password,
                role: role.toUpperCase() as Role,
                ...(role === "CLIENT" ?
                    { client: { create: { balance: balance } } } :
                    { provider: { create: {} } })
            },
            include: {
                client: true,
                provider: true
            }
        })

        return user
    }

    async findAll(): Promise<IUserSavedDTO[] | null> {
        return await prisma.user.findMany({
            include: {
                client: true,
                provider: true
            }
        });
    }

    async findById(id: string): Promise<IUserSavedDTO | null> {

        return await prisma.user.findFirst({
            where: {
                id: id
            },
            include: {
                provider: true,
                client: true
            }
        })
    }

    async findByEmail(email: string): Promise<IUserSavedDTO | null> {

        return await prisma.user.findFirst({
            where: {
                email: email
            },
            include: {
                provider: true,
                client: true
            }
        })
    }

    async delete(id: string): Promise<void> {
        await prisma.user.delete({
            where: {
                id
            }
        })
    }

}