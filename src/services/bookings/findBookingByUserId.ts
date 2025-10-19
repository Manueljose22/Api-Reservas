import { BookingsRepository } from "../../repositories/bookings/BookingsRepository";
import { bookingSavedDTO } from "../../repositories/bookings/IBookingsRepository";





class findBookingByUserIdService {

    constructor(private bookingsRepository: BookingsRepository) { }

    async execute(userId: string): Promise<Error | bookingSavedDTO[]> {

        const bookings = await this.bookingsRepository.findAllByUser(userId)

        if (!bookings) {
            throw new Error("Não existe reservas");
        }

        return bookings
    }
}

export { findBookingByUserIdService };