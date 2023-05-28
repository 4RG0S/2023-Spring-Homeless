import { Board } from "../model/base/Board";
import Comment from "../model/Comment";

export default interface CommentRepository {
    createComment(comment: Comment): Promise<number>;
    getComment(commentedPostBoard: Board, commentId: number): Promise<Comment>;
    getCommentsByUser(userId: string): Promise<Array<Comment>>;
    getCommentsByPost(postedBoard: Board, postId: number): Promise<Array<Comment>>;
    updateComment(updatedComment: Comment): Promise<boolean>;
    deleteComment(commentedPostBoard: Board, commentId: number): Promise<boolean>;
}
