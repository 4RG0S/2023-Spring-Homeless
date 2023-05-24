import Post from "../model/Post";
import { Board } from "../model/base/Board";
import { FileRequest, PostRequest } from "../model/request/Request";

export default interface PostRepository {
    createPost(post: PostRequest): number;
    getPost(postedBoard: Board, postId: number): Post | null;
    getAllPosts(postedBoard: Board, page: number, offset: number): Array<Post>;
    // updatePost(postedBoard: Board, postId: number, updatedPost: PostRequest): boolean;
    updatePost(updatedPost: Post): boolean;
    deletePost(postedBoard: Board, postId: number): boolean;
    uploadFiles(postedBoard: Board, postId: number, fileRequests: Array<FileRequest>): boolean;
}
