import React, { useEffect, useState } from "react";
import PostRepository from "../../../repo/PostRepository";
import PostDummyRepositoryImpl from "../../../repo/dummy/PostDummyRepositoryImpl";
import Post from "../../../model/Post";
import { Board } from "../../../model/base/Board";
import Scaffold from "../../widget/Scaffold";
import PostCard from "../post_card/PostCard";


const PostsView = (): JSX.Element => {
    const [posts, updatePosts] = useState<Array<Post>>([]);

    useEffect(() => {
        const getPost = async () => {
            const postRepository: PostRepository = PostDummyRepositoryImpl.getInstance();
            const posts: Array<Post> = await postRepository.getAllPosts(Board.ANNOUNCEMENT, 0, 0);
            updatePosts(posts);
        }
        getPost();
    }, []);

    if (posts?.length === 0) return <></>;

    return (
        <Scaffold>
            <PostCard post={posts[0]}></PostCard>
        </Scaffold>
    );
}

export default PostsView;
