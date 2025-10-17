import { bookingCreateDTO, bookingSavedDTO, IBookingsRepository } from "./IBookingsRepository";





export class BookingsRepository implements IBookingsRepository {
    
    async create(data: bookingCreateDTO): Promise<bookingSavedDTO | void> {
        throw new Error("Method not implemented.");
    }

    async findAll(): Promise<bookingSavedDTO[] | null> {
        throw new Error("Method not implemented.");
    }

    async findAllByProvider(barbershopId: string): Promise<bookingSavedDTO[] | null> {
        throw new Error("Method not implemented.");
    }

    async findById(id: string): Promise<bookingSavedDTO | null> {
        throw new Error("Method not implemented.");
    }

    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}