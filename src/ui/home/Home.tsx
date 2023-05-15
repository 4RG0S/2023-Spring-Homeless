import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { FlexContainer } from '../widget/FlexContainer';
import { FlexItem } from '../widget/FlexItem';
import { ColorConstant, ResponsiveSizeConstant } from '../../GlobalConstant'; 
import { Intro } from './Intro';
import { Brief } from './Brief';

const homeConstant = {
    SCREEN_HEIGHT: '100vh',
    SCREEN_WIDTH: '100vw',
    SCREEN_WIDTH_PERCENT: '100%',
    SCREEN_MIN_WIDTH: '550px',
    SIDEBAR_WIDTH: '20%',
    SIDEBAR_MIN_WIDTH: '200px',
    MAIN_SECTION_WIDTH: '80%',
}

export const Home = (): JSX.Element => {
    const isSmallScreen = useMediaQuery({ maxWidth: ResponsiveSizeConstant.SMALL_SCREEN_WIDTH });
    let mainSectionWidth = isSmallScreen ? homeConstant.SCREEN_WIDTH_PERCENT : homeConstant.MAIN_SECTION_WIDTH;
    let sideBarDisplay = isSmallScreen ? 'none' : 'flex';

    const sideBarAttributes = {
        width: homeConstant.SIDEBAR_WIDTH,
        minWidth: homeConstant.SIDEBAR_MIN_WIDTH,
        display: sideBarDisplay
    };

    const homeAttributes = {
        minWidth: homeConstant.SCREEN_MIN_WIDTH
    };

    return (
        <>
        <FlexContainer width='100vw' height={homeConstant.SCREEN_HEIGHT} {...homeAttributes}>
            <FlexContainer height='100%' flexDirection='column' {...sideBarAttributes}>
                <FlexItem width='100%' flexBasis='0' flexGrow={25} {...{background: ColorConstant.BLACK}}>
                    <Intro />
                </FlexItem>
                <FlexItem width='100%' flexBasis='0' flexGrow={75} {...{background: ColorConstant.LIGHT_GREY}}>
                    {/* Menu Bar */}
                </FlexItem>
            </FlexContainer>
            <FlexContainer width={mainSectionWidth} height={homeConstant.SCREEN_HEIGHT} flexDirection='column'>
                <FlexItem width='100%' flexBasis='0' flexGrow={7} {...{minHeight: '60px', background: ColorConstant.BLACK}}></FlexItem>
                <FlexItem width='100%' flexBasis='0' flexGrow={93} {...{background: ColorConstant.WHITE}}>
                    <Brief />
                </FlexItem>
            </FlexContainer>
        </FlexContainer>
        <FlexContainer width='100vw' height={homeConstant.SCREEN_HEIGHT} {...homeAttributes}>
            <FlexContainer width='100%' flexDirection='column' height={homeConstant.SCREEN_HEIGHT}>
                <FlexItem width='100%' flexBasis='0' flexGrow={100} {...{background: ColorConstant.BLACK}}>
                    {/* Our best contribution ... */}
                </FlexItem>
            </FlexContainer>
        </FlexContainer>
        </>
    )
}
