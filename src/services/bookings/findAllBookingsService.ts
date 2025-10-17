import { BookingsRepository } from "../../repositories/bookings/BookingsRepository";
import { bookingSavedDTO } from "../../repositories/bookings/IBookingsRepository";



class FindAllBookingsService {

    constructor(private bookingsRepository: BookingsRepository) { }

    async execute(): Promise<bookingSavedDTO[] | null> {
        const bookings = await this.bookingsRepository.findAll();

        return bookings
    }
}

export { FindAllBookingsService };
