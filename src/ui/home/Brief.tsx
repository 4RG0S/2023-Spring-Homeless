import React from "react";
import { useMediaQuery } from "react-responsive";
import { FlexContainer } from "../widget/FlexContainer";
import { GlobalConstant } from "../../GlobalConstant";

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
    const isSmallScreen = useMediaQuery({ maxWidth: GlobalConstant.SMALL_SCREEN_WIDTH });
    let titleFontSize = isSmallScreen ? localConstant.TITLE_SMALL_FONT_SIZE : localConstant.TITLE_DESKTOP_FONT_SIZE;
    let contentFontSize = isSmallScreen ? localConstant.CONTENT_SMALL_FONT_SIZE : localConstant.CONTENT_DESKTOP_FONT_SIZE;
    let titleWidth = isSmallScreen ? localConstant.TITLE_SMALL_MIN_WIDTH : localConstant.TITLE_DESKTOP_MIN_WIDTH;
    let contentWidth = isSmallScreen ? localConstant.CONTENT_SMALL_MIN_WIDTH : localConstant.CONTENT_DESKTOP_MIN_WIDTH;

    return (
        <FlexContainer width='100%' flexDirection='column' justifyContent='space-between' {...{margin: '25px 35px'}}>
            <p style={{fontSize: '3rem', margin: 0, fontWeight: 100}}>ARGOS</p>
            <FlexContainer width='100%' flexDirection='column' justifyContent='flex-end' alignItems='flex-end'>
                <p style={{fontSize: titleFontSize, margin: 0, width: '60%', minWidth: titleWidth, fontWeight: 300}}>
                    Cyber security club in Chungnam National University
                </p>
                <p style={{fontSize: contentFontSize, margin: '50px', width: '40%', minWidth: contentWidth, fontWeight: 300}}>
                    ARGOS is an information security club that aims to enhance members' 
                    security expertise and knowledge through various activities such as study sessions, 
                    CTF challenges, and research projects. Join us to improve your skills and contribute 
                    to the security community!
                </p>
            </FlexContainer>
        </FlexContainer>
    );
}
