import { IUsersRepository, IUserSavedDTO } from "../../repositories/users/IUsersRepository";



class FindAllUsersService {

    constructor(private usersRepository: IUsersRepository) { }

    async execute(): Promise<IUserSavedDTO[] | null> {
        const users = await this.usersRepository.findAll();

        return users
    }
}

export { FindAllUsersService };
