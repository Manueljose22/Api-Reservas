import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken";

type jwtPayload = {
    id: string;
    iat: number;
    exp: number;
}



export const ensuredAuthenticated = async (request: Request, response: Response, next: NextFunction) =>{

    const authHeaders = request.headers.authorization;

    if (!authHeaders) {
        return response.status(401).json({message: 'Acesso negado!'});
    }

    const token = authHeaders && authHeaders.split(" ")[1];

    try {

        const {id} = verify(token, String(process.env.JWT_SECRET)) as jwtPayload;
 
        request.userId = id;
       
       return next();

    } catch (error) {
      return  response.status(400).json({message: 'Token invalido!'})
    }
    
}