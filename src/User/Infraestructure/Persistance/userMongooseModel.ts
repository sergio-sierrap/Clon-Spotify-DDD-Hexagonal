import mongoose, { model, Schema } from 'mongoose'
import User from 'User/Domain/Entities/user';

const userSchema = new Schema<User>(
    {
        id: {
            type: String
        },
        name: {
            type: String
        },
        lastname: {
            type: String
        },
        username: {
            type: String
        },
        suscription: {
            type: String
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String
        },
        isDeleted: {
            type: Boolean,
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const userModel = model<User>('User', userSchema);
export default userModel;