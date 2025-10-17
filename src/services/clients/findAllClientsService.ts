import { ClientsRepository } from "../../repositories/clients/ClientsRepository";
import { clientSavedDTO } from "../../repositories/clients/IClientsRepository";

class FindAllClientsService {

    constructor(private clientsRepository: ClientsRepository) { }

    async execute(): Promise<clientSavedDTO[] | null> {
        const clients = await this.clientsRepository.findAll();

        return clients
    }
}

export { FindAllClientsService };
