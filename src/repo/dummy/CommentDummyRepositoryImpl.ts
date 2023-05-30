import Comment from "../../model/Comment";
import Post from "../../model/Post";
import User from "../../model/User";
import { Board } from "../../model/base/Board";
import CommentRepository from "../CommentRepository";

export default class CommentDummyRepositoryImpl implements CommentRepository {

    private static instance: CommentDummyRepositoryImpl;

    private constructor() {
        // private constructor to prevent instantiation
    }

    public static getInstance(): CommentDummyRepositoryImpl {
        if (!CommentDummyRepositoryImpl.instance) {
            CommentDummyRepositoryImpl.instance = new CommentDummyRepositoryImpl();
        }
        return CommentDummyRepositoryImpl.instance;
    }

    private _user: User = new User(
        "<id>",
        "<name>",
        new Date(Date.now()),
        "https://image.aladin.co.kr/product/27011/87/cover500/f822730421_1.jpg",
        new Date(Date.now())
    );

    private _comment: Comment = new Comment(
        0,
        0,
        Board.FREE,
        "<content1>",
        0,
        this._user,
        new Date(Date.now())
    );

    private _comments: Array<Comment> = [
        new Comment(
            0,
            0,
            Board.FREE,
            "<content1>",
            0,
            this._user,
            new Date(Date.now())
        ),
        new Comment(
            1,
            0,
            Board.FREE,
            "<content2>",
            0,
            this._user,
            new Date(Date.now())
        )
    ];

    async createComment(comment: Comment): Promise<number> {
        return 0;
    }

    async getComment(commentedPostBoard: Board, commentId: number): Promise<Comment | null> {
        return this._comment;
    }

    async getCommentsByUser(userId: string): Promise<Array<Comment>> {
        return this._comments;
    }

    async getCommentsByPost(postedBoard: Board, postId: number): Promise<Array<Comment>> {
        return this._comments;
    }

    async updateComment(updatedComment: Comment): Promise<boolean> {
        return true;
    }

    async deleteComment(commentedPostBoard: Board, commentId: number): Promise<boolean> {
        return true;
    }
}
