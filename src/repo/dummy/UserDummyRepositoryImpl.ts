import User from "../../model/User";
import UserRepository from "../UserRepository";

export default class UserDummyRepositoryImpl implements UserRepository {

    private static instance: UserDummyRepositoryImpl;

    private constructor() {
        // private constructor to prevent instantiation
    }

    public static getInstance(): UserDummyRepositoryImpl {
        if (!UserDummyRepositoryImpl.instance) {
            UserDummyRepositoryImpl.instance = new UserDummyRepositoryImpl();
        }
        return UserDummyRepositoryImpl.instance;
    }

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
