import User from "../../model/User";
import UserRepository from "../UserRepository";

export default class UserDummyRepositoryImpl implements UserRepository {
    async createUser(user: User): Promise<string> {
        return "<id>";
    }

    async getUser(userId: string): Promise<User | null> {
        const user: User = new User(
            userId,
            "<name>",
            new Date(Date.now()),
            "https://image.aladin.co.kr/product/27011/87/cover500/f822730421_1.jpg",
            new Date(Date.now())
        );

        return user;
    }

    async updateUser(updatedUser: User): Promise<boolean> {
        return true;
    }

    async deleteUser(userId: string): Promise<boolean> {
        return true;
    }
}
