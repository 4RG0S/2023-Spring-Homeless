import React from "react";
import Scaffold from "../widget/Scaffold";
import PostsView from "./posts_view/PostsView";


const Posts = (): JSX.Element => {
    return (
        <Scaffold>
            <PostsView />
        </Scaffold>
    );
}

export default Posts;
