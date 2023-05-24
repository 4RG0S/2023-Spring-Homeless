import { Board } from "../model/base/Board";
import { CommentRequest } from "../model/request/Request";

export default interface CommentRepository {
    createComment(comment: CommentRequest): number;
    getComment(commentedPostBoard: Board, commentId: number): Comment;
    getCommentsByUser(userId: string): Array<Comment>;
    // updateComment(commentedPostBoard: Board, commentId: number, updatedComment: CommentRequest): boolean;
    updateComment(updatedComment: Comment): boolean;
    deleteComment(commentedPostBoard: Board, commentId: number): boolean;
}
