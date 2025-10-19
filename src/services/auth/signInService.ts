import { compare } from "bcrypt";
import { IUsersRepository } from "../../repositories/users/IUsersRepository";
import { userAuth } from "./signUpService";
import { generateUserToken } from "../../middlewares/auth/generateToken";






class SignInService {

    constructor(private IUserRepository: IUsersRepository) { }

    async execute(email: string, password: string): Promise<Error | userAuth> {

        const user = await this.IUserRepository.findByEmail(email);

        if (!user) {
            throw new Error("Verifique seu email")
        }

        const passwordIsMatch = await compare(password, user.password);

        if (!passwordIsMatch) {
            throw new Error("Senha incorreta");
        }

        const token = generateUserToken(user.id);


        return {
            userId: user.id,
            name: user.fullname,
            role: user.role,
            token: token
        }
    }
}

export { SignInService };



