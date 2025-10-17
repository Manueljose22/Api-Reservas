import { IUsersRepository, IUserSavedDTO } from "../../repositories/users/IUsersRepository";



class FindByIdUserService {

    constructor(private usersRepository: IUsersRepository) { }

    async execute(id: string): Promise<IUserSavedDTO | Error> {
        const user = await this.usersRepository.findById(id);

        if (!user) {
            throw new Error("Usuário não encontrado.");
        }

        return user
    }
}

export { FindByIdUserService };
