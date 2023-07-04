import React from "react";
import { ResponsiveText } from "../../widget/TextWidgets";
import { ColorConstant } from "../../../GlobalConstant";


const NoPost = (): JSX.Element => {

    return (
        <ResponsiveText fontSize="Medium" color={ColorConstant.WHITE}>
            There is no posts.
        </ResponsiveText>
    );
}

export default NoPost;

