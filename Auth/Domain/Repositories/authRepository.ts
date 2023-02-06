import { Auth } from "../../../Auth/Domain/Entities/auth";

export interface AuthRepository {
    getById(id: string): Promise<Auth>;
    getByEmail(email: string): Promise<Auth>
    getByUsername(username: string): Promise<Auth>
    create(auth: Auth): Promise<Auth>;
    update(auth: Auth): Promise<Auth>
    delete(auth: Auth): Promise<void>
}