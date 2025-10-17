import { hash } from "bcrypt";
import { IUserCreateDTO, IUserSavedDTO, IUsersRepository } from "../../repositories/users/IUsersRepository";
import { generateUserToken } from "../../middlewares/auth/generateToken";


export type userAuth = {
    userId: string;
    role: string;
    token: string;
}



class signUpService {

    constructor(private IUserRepository: IUsersRepository) { }

    async execute(data: IUserCreateDTO): Promise<Error | IUserSavedDTO | userAuth> {

        const user = await this.IUserRepository.findByEmail(data.email);

        if (user) {
            throw new Error("Já existe um usuário com este email");
        }

        if (!data.fullname) {
            throw new Error("Informe seu nome completo");
        } else if(!data.email){
            throw new Error("Informe seu email");
        } else if(!data.nif){
            throw new Error("Informe seu nif");
        } else if(!data.password){
            throw new Error("Crie uma senha");
        } 

        const passwordHash = await hash(data.password, 12);
        data.password = passwordHash;

        const newUser = await this.IUserRepository.create(data);

        const token = generateUserToken(newUser.id);

        
        return {
            userId: newUser.id,
            role: newUser.role,
            token: token
        }
    }
}

export { signUpService };