import { Request, Response } from 'express';
import { BookingsRepository } from '../../repositories/bookings/BookingsRepository';
import { findBookingByUserIdService } from '../../services/bookings/findBookingByUserId';




class findBookingByUserIdController {
    async handle(request: Request, response: Response) {
        const { userId } = request;
       
        try {

            const bookingsRepository = new BookingsRepository();
            const service = new findBookingByUserIdService(bookingsRepository);

            const result = await service.execute(userId)

            return response.status(200).json(result);

        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
}

export default new findBookingByUserIdController;