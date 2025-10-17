import { Request, Response } from 'express';




class CreateBookingController{ 
async handle(request: Request, response: Response){
        try {


            return response.json()
        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
}

export default new CreateBookingController;