import React from "react";
import { useMediaQuery } from "react-responsive";
import { FlexContainer } from "../widget/FlexContainer";
import { Text } from "../widget/Text";
import { ResponsiveSizeConstant } from "../../GlobalConstant";

const localConstant = {
    TITLE_DESKTOP_FONT_SIZE: '4rem',
    TITLE_SMALL_FONT_SIZE: '3.7rem',
    TITLE_DESKTOP_MIN_WIDTH: '400px',
    TITLE_SMALL_MIN_WIDTH: '350px',
    CONTENT_DESKTOP_FONT_SIZE: '1.5rem',
    CONTENT_SMALL_FONT_SIZE: '1.3rem',
    CONTENT_DESKTOP_MIN_WIDTH: '350px',
    CONTENT_SMALL_MIN_WIDTH: '300px',
}

export const Brief = (): JSX.Element => {
    const isSmallScreen = useMediaQuery({ maxWidth: ResponsiveSizeConstant.SMALL_SCREEN_WIDTH });
    let titleFontSize = isSmallScreen ? localConstant.TITLE_SMALL_FONT_SIZE : localConstant.TITLE_DESKTOP_FONT_SIZE;
    let contentFontSize = isSmallScreen ? localConstant.CONTENT_SMALL_FONT_SIZE : localConstant.CONTENT_DESKTOP_FONT_SIZE;
    let titleWidth = isSmallScreen ? localConstant.TITLE_SMALL_MIN_WIDTH : localConstant.TITLE_DESKTOP_MIN_WIDTH;
    let contentWidth = isSmallScreen ? localConstant.CONTENT_SMALL_MIN_WIDTH : localConstant.CONTENT_DESKTOP_MIN_WIDTH;

    return (
        <FlexContainer width='100%' flexDirection='column' justifyContent='space-between' 
                       {...{margin: '25px 35px', zIndex: 2, pointerEvents: 'none'}}>
            <Text fontSize='3rem' fontWeight={100} {...{margin: 0}}>ARGOS</Text>
            <FlexContainer width='100%' flexDirection='column' justifyContent='flex-end' alignItems='flex-end'>
                <Text fontSize={titleFontSize} width='60%' fontWeight={300} {...{margin: 0, minWidth: titleWidth}}>
                    Cyber security club in Chungnam National University
                </Text>
                <Text fontSize={contentFontSize} width='40%' fontWeight={300} {...{margin: '50px', minWidth: contentWidth}}>
                    ARGOS is an information security club that aims to enhance members' 
                    security expertise and knowledge through various activities such as study sessions, 
                    CTF challenges, and research projects. Join us to improve your skills and contribute 
                    to the security community!
                </Text>
            </FlexContainer>
        </FlexContainer>
    );
}
