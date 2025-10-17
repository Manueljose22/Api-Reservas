


export type IUserCreateDTO = {
    fullname: string;
    email: string;
    password: string;
    nif: string;
    role: 'Client' | 'Provider';
    balance: number;
}


export type IUserSavedDTO = {
    id: string;
    fullname: string;
    email: string;
    nif: string;
    password: string;
    role: 'Client' | 'Provider';
    createdAt: Date;
    updatedAt: Date;
    client: {
        id: string;
        balance: number;
    } | null;
    provider: {
        id: string;
    } | null;
    
}



export interface IUsersRepository {
    create(data: IUserCreateDTO): Promise<IUserSavedDTO>
    findAll(): Promise<IUserSavedDTO[] | null>
    findById(id: string): Promise<IUserSavedDTO | null>
    findByEmail(email: string): Promise<IUserSavedDTO | null>
    delete(id: string): Promise<void>
}