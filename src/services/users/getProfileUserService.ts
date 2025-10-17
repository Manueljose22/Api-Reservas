import { IUserSavedDTO, IUsersRepository } from "../../repositories/users/IUsersRepository";




class GetProfileUserService {

    constructor(private userRepository: IUsersRepository) { }

    async execute(id: string): Promise<IUserSavedDTO | Error> {
        const user = await this.userRepository.findById(id);

        if (!user) {
            throw new Error("perfil não encontrado.");
        }

        return user
    }
}

export { GetProfileUserService };