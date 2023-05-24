import FileForm from "../model/FileForm";
import Post from "../model/Post";
import { Board } from "../model/base/Board";

export default interface PostRepository {
    createPost(post: Post): number;
    getPost(postedBoard: Board, postId: number): Post | null;
    getAllPosts(postedBoard: Board, page: number, offset: number): Array<Post>;
    updatePost(updatedPost: Post): boolean;
    deletePost(postedBoard: Board, postId: number): boolean;
    uploadFiles(postedBoard: Board, postId: number, fileForm: FileForm): boolean;
}
