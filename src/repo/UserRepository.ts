import User from "../model/User";
import { UserRequest } from "../model/request/Request";

export default interface UserRepository {
    createUser(user: UserRequest): string;
    getUser(userId: string): User | null;
    // updateUser(userId: string, updatedUser: UserRequest): boolean;
    updateUser(updatedUser: User): boolean;
    deleteUser(userId: string): boolean;
}
