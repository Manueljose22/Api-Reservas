import { BookingsRepository } from "../../repositories/bookings/BookingsRepository";



class DeleteBookingService {

    constructor(private bookingsRepository: BookingsRepository) { }

    async execute(id: string): Promise<void | Error> {
        const booking = await this.bookingsRepository.findById(id);

        if (!booking) {
            throw new Error("Agendamento não encontrado.");
        }

        await this.bookingsRepository.delete(id)
    }
}

export { DeleteBookingService };
