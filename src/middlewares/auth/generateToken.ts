import jwt from 'jsonwebtoken';





export const generateUserToken = (userId: string): string =>{
    
    const payload = { id: userId };

    const token = jwt.sign(
        payload, 
        process.env.JWT_SECRET!, 
        { 
            expiresIn: '1d' 
        });

    return token;
    
}

