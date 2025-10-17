import { BookingsRepository } from "../../repositories/bookings/BookingsRepository";
import { ClientsRepository } from "../../repositories/clients/ClientsRepository";
import { ProvidersRepository } from "../../repositories/providers/ProvidersRepository";
import { IServicesCreateDTO } from "../../repositories/services/IServicesRepository";



class UpdateBookingService {

    constructor(
            private bookingsRepository: BookingsRepository,
            private clientsRepository: ClientsRepository,
            private providersRepository: ProvidersRepository
        ) { }

    async execute(userId: string, serviceId: string, data: IServicesCreateDTO): Promise<void | Error> {
        const booking = await this.bookingsRepository.findById(serviceId);

        if (!booking) {
            throw new Error("Reserva não encontrado.");
        }

        if (booking.clientId !== userId) {
            throw new Error("Não tem permisão para actualiazr esta reserva");
        }

        const client = await this.clientsRepository.findById(userId);
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

        const newClientBalance = client.balance - data.price;
        const newProviderBalance = provider.balance + data.price;


        const updateData = {
            name: data.name ?? booking.service.name,
            description: data.description ?? booking.service.description,
            price: data.price ?? booking.service.price,
            providerId: data.providerId ?? booking.providerId,
            clientId: userId ?? booking.clientId, 
            serviceId: serviceId ?? booking.serviceId, 
            newClientBalance, 
            newProviderBalance
        }

        await this.bookingsRepository.update(serviceId, updateData)
    }
}

export { UpdateBookingService };
