import { Request, Response } from 'express';
import { BookingsRepository } from '../../repositories/bookings/BookingsRepository';
import { cancelBookingService } from '../../services/bookings/cancelBookingService';



class CancelBookingController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const {userId} = request;

        try {
            const bookingsRepository = new BookingsRepository();
            const service = new cancelBookingService(bookingsRepository);

            await service.execute(userId,id);

            return response.json({ message: 'Agendamento cancelado com sucesso.' });
        } catch (error: any) {
            return response.status(400).json({ message: error.message });
        }
    }
}

export default new CancelBookingController();
