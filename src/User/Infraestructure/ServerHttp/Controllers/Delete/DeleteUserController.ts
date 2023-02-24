/*
import User from 'User/Domain/Entities/user';
import { Request, Response } from 'express';
import { DeleteUserUseCase } from '../../../../Application/Delete/DeleteUserUseCase';

export class DeleteUserController {

    constructor(
        private readonly _deleteUserUseCase: DeleteUserUseCase) {}

    async createUser(request: Request, response: Response): Promise<Response> {
        try {
            const user: User = request.body;
            const createdUser = await this._deleteUserUseCase.run(user);
        return response.status(201).json(createdUser);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }
} */

import User from 'User/Domain/Entities/user';
import { Request, Response } from 'express';
import { DeleteUserUseCase } from '../../../../Application/Delete/DeleteUserUseCase';

function deleteUserController(_deleteUserUseCase: DeleteUserUseCase) {
    return async function (request: Request, response: Response): Promise<Response> {
        try {
            const user: User = request.body;
            const createdUser = await _deleteUserUseCase.run(user);
            return response.status(201).json(createdUser);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }
}

export default deleteUserController;

