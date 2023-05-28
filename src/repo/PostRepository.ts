import Post from "../model/Post";
import { Board } from "../model/base/Board";
import { FileFrom } from "../model/FileForm";

export default interface PostRepository {
    createPost(post: Post): Promise<number>;
    getPost(postedBoard: Board, postId: number): Promise<Post> | null;
    getAllPosts(postedBoard: Board, page: number, offset: number): Promise<Array<Post>>;
    getPostsByUser(userId: string): Promise<Array<Post>>;
    updatePost(updatedPost: Post): Promise<boolean>;
    deletePost(postedBoard: Board, postId: number): Promise<boolean>;
    uploadFiles(postedBoard: Board, postId: number, fileRequests: Array<FileFrom>): Promise<boolean>;
}
