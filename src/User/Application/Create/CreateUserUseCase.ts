import User from '../../Domain/Entities/user';
import { DatabaseContract } from '../../../Config/Database/DatabaseContract';
import { UserRepository } from '../../Domain/Repositories/userRepository';

export class CreateUserUseCase {
    private readonly _userRepository: UserRepository;
    private readonly _database: DatabaseContract;

    constructor(userRepository: UserRepository, database: DatabaseContract) {
        this._userRepository = userRepository;
        this._database = database;
    }

    async run (user: User): Promise<void> {
        await this._userRepository.create(user);
        await console.log(`${user}: Prueba de CASO DE USO: Crear`);
    }
}
