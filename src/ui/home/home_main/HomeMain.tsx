import React from "react";
import DivideContainer from "../../widget/Divider";
import Intro from "./Intro";
import { ColorConstant, ResponsiveSizeConstant } from "../../../GlobalConstant";
import Brief from "./Brief";
import HomeMenuButton from "./widget/HomeMenuButton";
import { useNavigate } from "react-router-dom";
import { Effect } from "./effect/Effect";

type HomeMainProps = {
    screen_height: String
    sidebar_min_width: Number
    topbar_min_height: Number
}

const HomeMain = ({
    screen_height,
    sidebar_min_width,
    topbar_min_height,
}: HomeMainProps) => {
    const navigator = useNavigate();

    return (
        <DivideContainer direction='row' {...{ minHeight: screen_height }}>
            <DivideContainer direction='column' ratio={20} disappearable={true}
                maxConditionWidth={ResponsiveSizeConstant.TABLET_SCREEN_MAX_WIDTH}
                {...{ minWidth: sidebar_min_width }}>
                <DivideContainer ratio={25} {...{ background: ColorConstant.BLACK }}>
                    <Intro />
                </DivideContainer>
                <DivideContainer ratio={75} {...{ background: ColorConstant.LIGHT_GREY }}>
                    <DivideContainer direction="column">
                        <HomeMenuButton
                            onClick={() => { }}
                        >
                            About
                        </HomeMenuButton>
                        <HomeMenuButton
                            onClick={() => { navigator('/posts') }}
                        >
                            Posts
                        </HomeMenuButton>
                        <HomeMenuButton
                            onClick={() => { }}
                        >
                            Github
                        </HomeMenuButton>
                        <HomeMenuButton
                            onClick={() => { }}
                        >
                            Google Scholar
                        </HomeMenuButton>
                    </DivideContainer>
                </DivideContainer>
            </DivideContainer>
            <DivideContainer direction='column' ratio={80}>
                <DivideContainer ratio={7} {...{
                    background: ColorConstant.BLACK,
                    minHeight: topbar_min_height,
                }}>
                </DivideContainer>
                <DivideContainer ratio={93} {...{ background: ColorConstant.WHITE }}>
                    <Brief {...{zIndex: 2, pointerEvents: 'none'}} />
                    <Effect {...{position: 'absolute', zIndex: 1}} />
                </DivideContainer>
            </DivideContainer>
        </DivideContainer>
    );
};

export default HomeMain;
