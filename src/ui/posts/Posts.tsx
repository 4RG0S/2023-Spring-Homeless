import React from "react";
import Scaffold from "../widget/Scaffold";

const Posts = (): JSX.Element => {
    return (
        <Scaffold {...{background: 'black'}}>
            <div style={{
                background: 'black',
                height: '100px',
            }}></div>
        </Scaffold>
    );
}

export default Posts;
