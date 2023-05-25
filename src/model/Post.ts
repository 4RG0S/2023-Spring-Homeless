import { FileResponse } from "./FileForm";
import User from "./User";
import { Board } from "./base/Board";
import DateBase from "./base/DateBase";

export default class Post extends DateBase {
    private _id: number;
    private _postedBoard: Board;
    private _title: string;
    private _content: string;
    private _like: number;
    private _user: User;
    private _tags: Array<string>;
    private _thumbnailURL?: string
    private _comments?: Array<Comment>;
    private _fileResponseObjects?: Array<FileResponse>;
    
    constructor(
        id: number,
        postedBoard: Board,
        title: string,
        content: string,
        like: number,
        user: User,
        tags: Array<string>,
        createdAt: Date,
        updatedAt?: Date,
        thumbnailURL?: string,
        comments?: Array<Comment>,  // Can be initialized when user read post's detail.
        fileResponseObjects?: Array<FileResponse>
    ) {
        super(createdAt, updatedAt);
        this._id = id;
        this._postedBoard = postedBoard;
        this._title = title;
        this._content = content;
        this._like = like;
        this._user = user;
        this._tags = tags;
        this._thumbnailURL = thumbnailURL;
        this._comments = comments;
        this._fileResponseObjects = fileResponseObjects;
    }

    // Getter
    get id(): number {
        return this._id;
    }

    get postedBoard(): Board {
        return this._postedBoard;
    }

    get title(): string {
        return this._title;
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

    get tags(): Array<string> {
        return this._tags;
    }

    get comments(): Array<Comment> | undefined {
        return this._comments;
    }

    get fileResponseObjects(): Array<FileResponse> | undefined {
        return this._fileResponseObjects;
    }

    get thumbnailURL(): string | undefined {
        return this._thumbnailURL;
    }

    // Setter
    set id(id: number) {
        this._id = id;
    }

    set postedBoard(postedBoard: Board) {
        this._postedBoard = postedBoard;
    }

    set title(title: string) {
        this._title = title;
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

    set tags(tags: Array<string>) {
        this._tags = tags;
    }

    set comments(comments: Array<Comment> | undefined) {
        this._comments = comments;
    }

    set fileResponseObjects(fileResponseObjects: Array<FileResponse> | undefined) {
        this._fileResponseObjects = fileResponseObjects;
    }

    set thumbnailURL(thumbnailURL: string | undefined) {
        this._thumbnailURL = thumbnailURL;
    }
}
