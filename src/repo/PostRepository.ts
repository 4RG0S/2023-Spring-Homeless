import Post from "../model/Post";

export default interface PostRepository {
    createPost(post: Post): number;
    
}
