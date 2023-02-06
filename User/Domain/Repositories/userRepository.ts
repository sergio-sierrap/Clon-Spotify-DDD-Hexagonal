import { User } from "../Entities/user";

export interface UserRepository {
    getById(id: string): Promise<User>;
    getByEmail(email: string): Promise<User>
    getByUsername(username: string): Promise<User>
    create(user: User): Promise<User>;
    update(user: User): Promise<User>
    delete(user: User): Promise<void>
}