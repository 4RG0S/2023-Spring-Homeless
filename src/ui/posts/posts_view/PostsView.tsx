import React, { useEffect, useState } from "react";
import PostRepository from "../../../repo/PostRepository";
import PostDummyRepositoryImpl from "../../../repo/dummy/PostDummyRepositoryImpl";
import Post from "../../../model/Post";
import { Board } from "../../../model/base/Board";
import Scaffold from "../../widget/Scaffold";
import PostCard from "../post_card/PostCard";
import FlexContainer from "../../widget/FlexContainer";


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
        <FlexContainer flexWrap="wrap" alignContent="flex-start">
            {posts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </FlexContainer>
    );
}

export default PostsView;
