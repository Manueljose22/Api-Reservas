import { IUsersRepository } from "../../repositories/users/IUsersRepository";



class DeleteUserService {

    constructor(private usersRepository: IUsersRepository) { }

    async execute(id: string): Promise<void | Error> {
        const user = await this.usersRepository.findById(id);

        if (!user) {
            throw new Error("Usuário não encontrado.");
        }

        await this.usersRepository.delete(id)
    }
}

export { DeleteUserService };
