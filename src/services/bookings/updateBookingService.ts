import { BookingsRepository } from "../../repositories/bookings/BookingsRepository";
import { bookingUpdateTranstionDTO } from "../../repositories/bookings/IBookingsRepository";
import { ClientsRepository } from "../../repositories/clients/ClientsRepository";
import { ProvidersRepository } from "../../repositories/providers/ProvidersRepository";
;



class UpdateBookingService {

    constructor(
        private bookingsRepository: BookingsRepository,
        private clientsRepository: ClientsRepository,
        private providersRepository: ProvidersRepository
    ) { }

    async execute(bookingId: string, data: bookingUpdateTranstionDTO): Promise<void | Error> {
        const booking = await this.bookingsRepository.findById(bookingId);
        const client = await this.clientsRepository.findById(booking?.clientId!);
        const provider = await this.providersRepository.findById(booking?.providerId!);
        
        if (!booking) {
            throw new Error("Reserva não encontrado.");
        }  else if (!client || !provider) {
            throw new Error("Cliente ou prestador não encontrados.");
        } 

        const isCancel = data.status === "CANCELED";

        if (isCancel) {
            const refundAmount = booking.price;

            await this.bookingsRepository.updateTransaction({
                bookingId,
                status: "CANCELED",
                refundAmount,
                clientId: booking.clientId,
                providerId: booking.providerId,
                serviceId: booking.serviceId
            });

            return;
        }

        await this.bookingsRepository.updateBookingData(bookingId, {
            dateBooking: data.dateBooking,
            status: data.status ?? booking.status,
        });
    }
}

export { UpdateBookingService };
