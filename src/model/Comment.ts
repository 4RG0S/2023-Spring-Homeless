import User from "./User";
import { Board } from "./base/Board";
import DateBase from "./base/DateBase";

export default class Comment extends DateBase {
    private _id: number;
    private _commentedPostBoard: Board;
    private _content: string;
    private _like: number;
    private _user: User;

    constructor(
        id: number,
        commentedPostBoard: Board,
        content: string,
        like: number,
        user: User,
        createdAt: Date,
        updatedAt?: Date
    ) {
        super(createdAt, updatedAt);
        this._id = id;
        this._commentedPostBoard = commentedPostBoard;
        this._content = content;
        this._like = like;
        this._user = user;
    }

    // Getter
    get id(): number {
        return this._id;
    }

    get commentedPostBoard(): Board {
        return this._commentedPostBoard;
    }

    get content(): string {
        return this._content;
    }

    get like(): number {
        return this._like;
    }

    get user(): User {
        return this._user;
    }

    // Setter
    set id(id: number) {
        this._id = id;
    }

    set commentedPostBoard(commentedPostBoard: Board) {
        this._commentedPostBoard = commentedPostBoard;
    }

    set content(content: string) {
        this._content = content;
    }

    set like(like: number) {
        this._like = like;
    }

    set user(user: User) {
        this._user = user;
    }
}
