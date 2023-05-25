import User from "../User";
import { Board } from "../base/Board";

export type UserRequest = {
    id: string;
    name: string;
    birth: Date;
    imageURL: string;
}

export type PostRequest = {
    postedBoard: Board;
    title: string;
    content: string;
    user: User;
    tags: Array<string>;
    thumbnailURL: string;
    fileRequests: Array<FileRequest>;
}

export type CommentRequest = {
    commentedPostBoard: Board;
    content: string;
    user: User;
}

export type FileRequest = {
    name: string;
    file: File;
};

export type ImageRequest = {
    image: File;
    name?: string;
}
