import User from '../../Domain/Entities/user';
import { UserRepository } from '../../Domain/Repositories/userRepository';

export class userCreatorUseCase {
  private readonly _userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this._userRepository = userRepository;
  }

  async run (user: User): Promise<void> {
    await this._userRepository.create(user);
  }
}
