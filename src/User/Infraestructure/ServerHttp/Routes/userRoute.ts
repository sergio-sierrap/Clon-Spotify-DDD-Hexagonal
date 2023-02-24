import { Router } from 'express'
import  {createUserController}  from '../Controllers/Create/CreateUserController'
/*
import  DeleteUserController  from '../Controllers/Delete/DeleteUserController'
import { GetUserByEmailController } from '../Controllers/Search/GetUserByEmailController'
import { GetUserByUsernameController } from '../Controllers/Search/GetUserByUsernameController'
import { UpdateUserController } from '../Controllers/Update/UpdateUserController'
*/
export const userRoute = Router();
/*
userRoute.delete('/:id', DeleteUserController)
userRoute.put('/:id', UpdateUserController)
userRoute.get('/:email', GetUserByEmailController)
userRoute.get('/:username', GetUserByUsernameController)
*/
userRoute.post('/', createUserController)

