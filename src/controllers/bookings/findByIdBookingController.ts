import { Request, Response } from 'express';
import { BookingsRepository } from '../../repositories/bookings/BookingsRepository';
import { FindByIdBookingService } from '../../services/bookings/findByIdBookingService';



class FindByIdBookingController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        try {
            const bookingsRepository = new BookingsRepository();
            const service = new FindByIdBookingService(bookingsRepository);

            const result = await service.execute(id);

            return response.json(result);
        } catch (error: any) {
            return response.status(400).json({ message: error.message });
        }
    }
}

export default new FindByIdBookingController();
