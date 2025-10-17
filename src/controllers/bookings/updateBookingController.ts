import { Request, Response } from 'express';
import { BookingsRepository } from '../../repositories/bookings/BookingsRepository';
import { UpdateBookingService } from '../../services/bookings/updateBookingService';
import { ClientsRepository } from '../../repositories/clients/ClientsRepository';
import { ProvidersRepository } from '../../repositories/providers/ProvidersRepository';




class UpdateBookingController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const data = request.body
        const { userId } = request;

        try {

            const bookingsRepository = new BookingsRepository();
            const clientsRepository = new ClientsRepository();
            const providersRepository = new ProvidersRepository();
            const service = new UpdateBookingService(bookingsRepository, clientsRepository, providersRepository);

            await service.execute(userId, id, data);

            return response.json({ message: 'Reserva actualizado com sucesso.' });
        } catch (error: any) {
            return response.status(400).json({ message: error.message });
        }
    }
}

export default new UpdateBookingController();
