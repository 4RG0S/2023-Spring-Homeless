import React from "react";
import { useMediaQuery } from "react-responsive";
import { FlexContainer } from "../widget/FlexContainer";
import { ResponsiveText, Text } from "../widget/TextWidgets";
import { ResponsiveSizeConstant } from "../../GlobalConstant";

const localConstant = {
    TITLE_DESKTOP_FONT_SIZE: '4rem',
    TITLE_SMALL_FONT_SIZE: '3.7rem',
    TITLE_DESKTOP_MIN_WIDTH: '400px',
    TITLE_SMALL_MIN_WIDTH: '350px',
    CONTENT_DESKTOP_FONT_SIZE: '1.5rem',
    CONTENT_SMALL_FONT_SIZE: '1.3rem',
    CONTENT_DESKTOP_MIN_WIDTH: '350px',
    CONTENT_SMALL_MIN_WIDTH: '300px'
}

export const Brief = (): JSX.Element => {
    return (
        <FlexContainer width='100%' flexDirection='column' justifyContent='space-between' {...{margin: '25px 35px'}}>
            <Text fontSize='3rem' fontWeight={100} {...{margin: 0}}>ARGOS</Text>
            <FlexContainer width='100%' flexDirection='column' justifyContent='flex-end' alignItems='flex-end'>
                <ResponsiveText fontSize='Large' width={['100%', '90%', '80%']} fontWeight={300} {...{maxWidth: '600px', margin: 0}}>
                    Cyber security club in Chungnam National University
                </ResponsiveText>
                <ResponsiveText fontSize='Small' width={['100%', '70%', '60%']} fontWeight={200} {...{maxWidth: '400px'}}>
                    ARGOS is an information security club that aims to enhance members' 
                    security expertise and knowledge through various activities such as study sessions, 
                    CTF challenges, and research projects. Join us to improve your skills and contribute 
                    to the security community!
                </ResponsiveText>
            </FlexContainer>
        </FlexContainer>
    );
}
