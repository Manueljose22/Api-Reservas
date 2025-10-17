import { ClientsRepository } from "../../repositories/clients/ClientsRepository";
import { clientSavedDTO } from "../../repositories/clients/IClientsRepository";

class FindByIdClientService {

    constructor(private clientsRepository: ClientsRepository) { }

    async execute(id: string): Promise<clientSavedDTO | Error> {
        const client = await this.clientsRepository.findById(id);

        if (!client) {
            throw new Error("Cliente não encontrado.");
        }

        return client
    }
}

export { FindByIdClientService };
