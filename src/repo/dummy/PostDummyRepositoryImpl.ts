import { FileFrom } from "../../model/FileForm";
import Post from "../../model/Post";
import User from "../../model/User";
import { Board } from "../../model/base/Board";
import PostRepository from "../PostRepository";

export default class PostDummyRepositoryImpl implements PostRepository {

    private _user: User = new User(
        "<id>",
        "<name>",
        new Date(Date.now()),
        "https://image.aladin.co.kr/product/27011/87/cover500/f822730421_1.jpg",
        new Date(Date.now())
    );

    private _post = new Post(
        0, 
        Board.FREE,
        "<title1>",
        "<content1>",
        1,
        this._user,
        new Array<string>("<tag>", "<tag>"),
        new Date(Date.now())
    );

    private _posts: Array<Post> = [
        new Post(
            0, 
            Board.FREE,
            "<title1>",
            "<content1>",
            1,
            this._user,
            new Array<string>("<tag>", "<tag>"),
            new Date(Date.now())
        ),
        new Post(
            1, 
            Board.FREE,
            "<title2>",
            "<content2>",
            3,
            this._user,
            new Array<string>("<tag>", "<tag>"),
            new Date(Date.now())
        ),
        new Post(
            0, 
            Board.ANNOUNCEMENT,
            "<title3>",
            "<content3>",
            1,
            this._user,
            new Array<string>("<tag>", "<tag>"),
            new Date(Date.now())
        ),
        new Post(
            1, 
            Board.ANNOUNCEMENT,
            "<title4>",
            "<content4>",
            3,
            this._user,
            new Array<string>("<tag>", "<tag>"),
            new Date(Date.now())
        ),
    ];

    async createPost(post: Post): Promise<number> {
        return 0;
    }

    async getPost(postedBoard: Board, postId: number): Promise<Post | null> {
        return this._post;
    }

    async getAllPosts(postedBoard: Board, page: number, offset: number): Promise<Array<Post>> {
        return this._posts;
    }

    async getPostsByUser(userId: string): Promise<Array<Post>> {
        return this._posts;
    }

    async updatePost(updatedPost: Post): Promise<boolean> {
        return true;
    }

    async deletePost(postedBoard: Board, postId: number): Promise<boolean> {
        return true;
    }

    async uploadFiles(postedBoard: Board, postId: number, fileRequests: Array<FileFrom>): Promise<boolean> {
        return true;
    }
}
