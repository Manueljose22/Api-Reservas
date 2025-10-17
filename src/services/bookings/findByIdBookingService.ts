import { BookingsRepository } from "../../repositories/bookings/BookingsRepository";
import { bookingSavedDTO } from "../../repositories/bookings/IBookingsRepository";




class FindByIdBookingService {

    constructor(private bookingsRepository: BookingsRepository) { }

    async execute(id: string): Promise<bookingSavedDTO | Error> {
        const booking = await this.bookingsRepository.findById(id);

        if (!booking) {
            throw new Error("Agendamento não encontrado.");
        }

        return booking
    }
}

export { FindByIdBookingService };
