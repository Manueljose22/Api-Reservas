import { Provider } from "@prisma/client";



export type providerSavedDTO = Provider



export interface IProvidersRepository {
    findById(id: string): Promise<providerSavedDTO | null>
    updateBalance(id: string, balance: number): Promise<void>
}