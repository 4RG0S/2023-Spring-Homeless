import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { FlexContainer } from '../widget/FlexContainer';
import { FlexItem } from '../widget/FlexItem';
import { ColorConstant, ResponsiveSizeConstant } from '../../GlobalConstant'; 
import { Intro } from './Intro';
import { Brief } from './Brief';
import { Scaffold } from '../widget/Scaffold';
import { DivideContainer } from '../widget/Divider';

const homeConstant = {
    SCREEN_HEIGHT: '100vh',
    SCREEN_WIDTH: '100vw',
    SCREEN_WIDTH_PERCENT: '100%',
    SCREEN_MIN_WIDTH: '550px',
    SIDEBAR_WIDTH: '20%',
    SIDEBAR_MIN_WIDTH: '200px',
    MAIN_SECTION_WIDTH_PERCENT: '80%',
}

export const Home = (): JSX.Element => {
    const isSmallScreen = useMediaQuery({ maxWidth: ResponsiveSizeConstant.TABLET_SCREEN_MAX_WIDTH });
    let mainSectionWidth = isSmallScreen ? homeConstant.SCREEN_WIDTH_PERCENT : homeConstant.MAIN_SECTION_WIDTH_PERCENT;
    let sideBarDisplay = isSmallScreen ? 'none' : 'flex';

    const sideBarAttributes = {
        width: homeConstant.SIDEBAR_WIDTH,
        minWidth: homeConstant.SIDEBAR_MIN_WIDTH,
        display: sideBarDisplay
    };

    return (
        <Scaffold>
        <FlexContainer width='100%'>
            <FlexContainer flexDirection='column' {...sideBarAttributes}>
                <FlexItem width='100%' flexBasis='0' flexGrow={25} {...{background: ColorConstant.BLACK, display: 'flex'}}>
                    <Intro />
                </FlexItem>
                <FlexItem width='100%' flexBasis='0' flexGrow={75} {...{background: ColorConstant.LIGHT_GREY}}>
                    {/* Menu Bar */}
                </FlexItem>
            </FlexContainer>
            <FlexContainer width={mainSectionWidth} flexDirection='column' {...{minHeight: '100vh'}}>
                <FlexItem width='100%' flexBasis='0' flexGrow={7} {...{minHeight: '60px', background: ColorConstant.BLACK}}></FlexItem>
                <FlexItem width='100%' flexBasis='0' flexGrow={93} {...{background: ColorConstant.WHITE, display: 'flex', justifyContent: 'center'}}>
                    <Brief />
                </FlexItem>
            </FlexContainer>
        </FlexContainer>
        <FlexContainer width='100%' height={homeConstant.SCREEN_HEIGHT}>
            <FlexContainer width='100%' flexDirection='column' height={homeConstant.SCREEN_HEIGHT}>
                <FlexItem width='100%' flexBasis='0' flexGrow={100} {...{background: ColorConstant.BLACK}}>
                    {/* Our best contribution ... */}
                </FlexItem>
            </FlexContainer>
        </FlexContainer>
        <DivideContainer direction='row'>
            <DivideContainer direction='column' ratio={20} disappearable={true} 
                             maxConditionWidth={ResponsiveSizeConstant.TABLET_SCREEN_MAX_WIDTH}
                             {...{minHeight: '100vh', minWidth: 200}}>
                <DivideContainer ratio={25} disappearable={true}
                                 maxConditionHeight={600}
                                 {...{background: ColorConstant.BLACK}}>
                    <Intro />
                </DivideContainer>
                <DivideContainer ratio={75} {...{background: ColorConstant.LIGHT_GREY}}>
                    
                </DivideContainer>
            </DivideContainer>
            <DivideContainer direction='column' ratio={80} {...{background: ColorConstant.WHITE, minHeight: '100vh'}}>
                <DivideContainer ratio={7} {...{background: ColorConstant.BLACK}}></DivideContainer>
                <DivideContainer ratio={93} {...{background: ColorConstant.WHITE}}>
                    <Brief />
                </DivideContainer>
            </DivideContainer>
        </DivideContainer>
        </Scaffold>
    )
}
