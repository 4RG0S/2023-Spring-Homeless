import User from "../model/User";

export default interface UserRepository {
    createUser(user: User): string;
    getUser(userId: string): User | null;
    updateUser(updatedUser: User): boolean;
    deleteUser(userId: string): boolean;
}
