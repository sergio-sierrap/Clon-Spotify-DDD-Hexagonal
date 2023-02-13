import  User  from "User/Domain/Entities/user";
import  userModel  from './userMongooseModel';
import { UserRepository } from "User/Domain/Repositories/userRepository";

export class UserMongodbRepository implements UserRepository {
    getUserById(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    getUserByEmail(email: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    getUserByUsername(username: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    async create(user: User): Promise<User> {
        const createdUser = await userModel.create(user);
        return createdUser;
    }
    async update(user: User): Promise<User> {
        const updatedUser = await userModel.findByIdAndUpdate(user.id);
        return updatedUser!;
    }
    async delete(user: User): Promise<User> {
        const deletedUser = await userModel.findByIdAndUpdate(user.id);
        return deletedUser!;
    }
    
}

export default UserMongodbRepository;