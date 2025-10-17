import { Request, Response } from 'express';
import { BookingsRepository } from '../../repositories/bookings/BookingsRepository';
import { DeleteBookingService } from '../../services/bookings/deleteBookingService';



class DeleteBookingController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        try {
            const bookingsRepository = new BookingsRepository();
            const service = new DeleteBookingService(bookingsRepository);

            await service.execute(id);

            return response.json({ message: 'Agendamento cancelado com sucesso.' });
        } catch (error: any) {
            return response.status(400).json({ message: error.message });
        }
    }
}

export default new DeleteBookingController();
