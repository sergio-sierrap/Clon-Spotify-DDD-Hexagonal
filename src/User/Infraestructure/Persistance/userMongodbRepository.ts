import  User  from "User/Domain/Entities/user";
import  userModel  from './userMongooseModel';
import { UserRepository } from "User/Domain/Repositories/userRepository";

export class UserMongodbRepository implements UserRepository {

    async getUserByUsername(user: User): Promise<User> {
        const foundUser = await userModel.findById(user.username);
        return foundUser!;
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