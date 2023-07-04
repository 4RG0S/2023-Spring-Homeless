import React, { useEffect, useState } from "react";
import PostRepository from "../../../repo/PostRepository";
import PostDummyRepositoryImpl from "../../../repo/dummy/PostDummyRepositoryImpl";
import Post from "../../../model/Post";
import { Board } from "../../../model/base/Board";
import PostCard from "../post_card/PostCard";
import GridContainer from "../../widget/GridContainer";
import { useMediaQuery } from "react-responsive";
import { ResponsiveSizeConstant } from "../../../GlobalConstant";
import NoPost from "./NoPost";


const PostsView = (): JSX.Element => {
    const [posts, updatePosts] = useState<Array<Post>>([]);

    const isTabletScreen = useMediaQuery({
        minWidth: ResponsiveSizeConstant.TABLET_SCREEN_MIN_WIDTH,
        maxWidth: ResponsiveSizeConstant.TABLET_SCREEN_MAX_WIDTH
    });
    const isMobileScreen = useMediaQuery({ maxWidth: ResponsiveSizeConstant.MOBILE_SCREEN_MAX_WIDTH });

    useEffect(() => {
        const getPost = async () => {
            const postRepository: PostRepository = PostDummyRepositoryImpl.getInstance();
            const posts: Array<Post> = await postRepository.getAllPosts(Board.ANNOUNCEMENT, 0, 0);
            updatePosts(posts);
        }
        getPost();
    }, []);

    if (posts?.length === 0) return <NoPost />;

    let repeatCount: number;
    if (isMobileScreen) repeatCount = 1;
    else if (isTabletScreen) repeatCount = 2;
    else repeatCount = 3;  // Desktop Screen

    return (
        <GridContainer 
            gridTemplateColumns={`repeat(${repeatCount}, 1fr)`}
            gridAutoFlow="dense"
        >
            {posts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </GridContainer>
    );
}

export default PostsView;
