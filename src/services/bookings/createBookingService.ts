import { BookingsRepository } from "../../repositories/bookings/BookingsRepository";
import { ClientsRepository } from "../../repositories/clients/ClientsRepository";
import { ProvidersRepository } from "../../repositories/providers/ProvidersRepository";
import { bookingCreateDTO } from "../../repositories/bookings/IBookingsRepository";




class CreateBookingService {

    constructor(
        private bookingsRepository: BookingsRepository,
        private clientsRepository: ClientsRepository,
        private providersRepository: ProvidersRepository
    ) { }

    async execute(data: bookingCreateDTO): Promise<void | Error> {

        if (!data.clientId) {
            throw new Error("Informe o cliente");
        } else if (!data.serviceId) {
            throw new Error("Informe o  serviço");
        } else if (!data.providerId) {
            throw new Error("Informe o prestador de serviço");
        } else if (!data.price) {
            throw new Error("Informe o preço do serviço");
        } else if (!data.dateBooking) {
            throw new Error("Informe a data para o serviço");
        }


        const client = await this.clientsRepository.findById(data.clientId);
     
        if (!client) {
            throw new Error("Cliente não encontrado.");
        }

        if (client.balance < data.price) {
            throw new Error("Saldo insuficiente.");
        }

        const provider = await this.providersRepository.findById(data.providerId);
        if (!provider) {
            throw new Error("Prestador de serviço não encontrado.");
        }

        
        await this.bookingsRepository.create({ 
            clientId: data.clientId, 
            price: data.price, 
            providerId: data.providerId, 
            serviceId: data.serviceId,
            dateBooking: data.dateBooking
         })
    }
}

export { CreateBookingService };