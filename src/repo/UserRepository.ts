import User from "../model/User";

export default interface UserRepository {
    createUser(user: User): Promise<string>;
    getUser(userId: string): Promise<User | null>;
    updateUser(updatedUser: User): Promise<boolean>;
    deleteUser(userId: string): Promise<boolean>;
}
