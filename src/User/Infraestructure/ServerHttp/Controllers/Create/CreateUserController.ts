import User from '../../../../Domain/Entities/user';
import { Request, Response } from 'express';
import { container } from '../../../../../Config/Dependencies/AwilixContainer';

export async function createUserController (request: Request, response: Response): Promise<void> {
    return await new Promise((resolve, reject) => {
        try {
            console.log(`CONTROLLER - Incoming request for ${request.body ? JSON.stringify(request.body, null, 4) : 'empty body'}`);
            const user: User = request.body;
            const createdUser = container.resolve("createUserUseCase").run(user);
            return response.status(201).json(createdUser);
            resolve();
        } catch (error) {
            return response.status(400).json(error);
            reject();
        }
    })        
}
