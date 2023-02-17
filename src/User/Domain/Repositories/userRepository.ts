import User from "../Entities/user";

export interface UserRepository {
    getUserByUsername(user: User): Promise<User>
    create(user: User): Promise<User>;
    update(user: User): Promise<User>
    delete(user: User): Promise<User>
}