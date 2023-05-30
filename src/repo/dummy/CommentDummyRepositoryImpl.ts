import Comment from "../../model/Comment";
import Post from "../../model/Post";
import User from "../../model/User";
import { Board } from "../../model/base/Board";
import CommentRepository from "../CommentRepository";

export default class CommentDummyRepositoryImpl implements CommentRepository {

    private _user: User = new User(
        "<id>",
        "<name>",
        new Date(Date.now()),
        "https://image.aladin.co.kr/product/27011/87/cover500/f822730421_1.jpg",
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
            0, 
            Board.FREE,
            "<title2>",
            "<content2>",
            3,
            this._user,
            new Array<string>("<tag>", "<tag>"),
            new Date(Date.now())
        ),
    ];

    private _comment: Comment = new Comment(
        0,
        Board.FREE,
        "<content1>",
        0,
        this._user,
        new Date(Date.now())
    );

    async createComment(comment: Comment): Promise<number> {
        return 0;
    }

    async getComment(commentedPostBoard: Board, commentId: number): Promise<Comment | null> {
        return this._comment;
    }

    async getCommentsByUser(userId: string): Promise<User | null> {
        return this._user;
    }

    async getCommentsByPost(postedBoard: Board, postId: number): Promise<Array<Post>> {
        return this._posts;
    }

    async updateComment(updatedComment: Comment): Promise<boolean> {
        return true;
    }

    async deleteComment(commentedPostBoard: Board, commentId: number): Promise<boolean> {
        return true;
    }
}
