import { Request, Response } from 'express';
import { BookingsRepository } from '../../repositories/bookings/BookingsRepository';
import { FindAllBookingsService } from '../../services/bookings/findAllBookingsService';




class FindAllBookingsController {
    async handle(request: Request, response: Response) {
        try {
            const bookingsRepository = new BookingsRepository();
            const service = new FindAllBookingsService(bookingsRepository);

            const result = await service.execute();

            return response.json(result);
        } catch (error: any) {
            return response.status(400).json({ message: error.message });
        }
    }
}

export default new FindAllBookingsController();
