import { BookingsRepository } from "../../repositories/bookings/BookingsRepository";



class cancelBookingService {

    constructor(private bookingsRepository: BookingsRepository) { }

    async execute(userId: string, serviceId: string): Promise<void | Error> {
        const booking = await this.bookingsRepository.findById(serviceId);

        if (!booking) {
            throw new Error("Agendamento não encontrado.");
        }

        if (booking.clientId !== userId) {
            throw new Error("Não tem permisão para cancelar esta reserva");
        }

        await this.bookingsRepository.cancelBooking(serviceId)
    }
}

export { cancelBookingService };
