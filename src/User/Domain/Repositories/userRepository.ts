import User from "../Entities/user";

export interface UserRepository {
    getUserById(id: string): Promise<User>;
    getUserByEmail(email: string): Promise<User>
    getUserByUsername(username: string): Promise<User>
    create(user: User): Promise<User>;
    update(user: User): Promise<User>
    delete(user: User): Promise<User>
}