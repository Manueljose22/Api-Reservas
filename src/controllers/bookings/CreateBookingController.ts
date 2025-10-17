import { Request, Response } from 'express';
import { BookingsRepository } from '../../repositories/bookings/BookingsRepository';
import { CreateBookingService } from '../../services/bookings/createBookingService';
import { ClientsRepository } from '../../repositories/clients/ClientsRepository';
import { ProvidersRepository } from '../../repositories/providers/ProvidersRepository';
import { bookingCreateDTO } from '../../repositories/bookings/IBookingsRepository';




class CreateBookingController {
    async handle(request: Request, response: Response) {
        
        const {userId} = request;
        const data = request.body as bookingCreateDTO;
        
        data.clientId = userId;

        try {
            const bookingsRepository = new BookingsRepository();
            const clientsRepository = new ClientsRepository();
            const providersRepository = new ProvidersRepository();
            const createBookingService = new CreateBookingService(bookingsRepository, clientsRepository, providersRepository);

            await createBookingService.execute(data);

            return response.json({ message: "Agendamento criado com sucesso." })

        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
}

export default new CreateBookingController;