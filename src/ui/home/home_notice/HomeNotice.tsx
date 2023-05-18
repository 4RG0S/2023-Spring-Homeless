import React from "react";
import { DivideContainer } from "../../widget/Divider";

type HomeNoticeProps = {
    screen_height: String
};

const HomeNotice = ({
    screen_height,
}: HomeNoticeProps) => {
    return (
        <DivideContainer {...{ minHeight: screen_height }}>
        </DivideContainer>
    );
}

export default HomeNotice;