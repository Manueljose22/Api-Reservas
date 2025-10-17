import { ClientsRepository } from "../../repositories/clients/ClientsRepository";

class DeleteClientService {

    constructor(private clientsRepository: ClientsRepository) { }

    async execute(id: string): Promise<void | Error> {
        const client = await this.clientsRepository.findById(id);

        if (!client) {
            throw new Error("Cliente não encontrado.");
        }

        await this.clientsRepository.delete(id)
    }
}

export { DeleteClientService };
