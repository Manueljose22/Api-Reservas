import prisma from "../../config/prisma";
import { IProvidersRepository, providerSavedDTO } from "./IProvidersRepository";



export class ProvidersRepository implements IProvidersRepository {

    async findById(id: string): Promise<providerSavedDTO | null> {
        const provider = await prisma.provider.findFirst({
            where: {
                id
            }
        });
        return provider
    }

    async updateBalance(id: string, balance: number): Promise<void> {
        
        await prisma.provider.update({
            where: {
                id
            },
            data: { balance:  balance },
        })
    }

}