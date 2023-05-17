import React from 'react';
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
    SIDEBAR_MIN_WIDTH: 200,
    TOPBAR_MIN_HEIGHT: 60
}

export const Home = (): JSX.Element => {
    return (
        <Scaffold>
        <DivideContainer direction='row' {...{minHeight: homeConstant.SCREEN_HEIGHT}}>
            <DivideContainer direction='column' ratio={20} disappearable={true} 
                             maxConditionWidth={ResponsiveSizeConstant.TABLET_SCREEN_MAX_WIDTH}
                             {...{minWidth: homeConstant.SIDEBAR_MIN_WIDTH}}>
                <DivideContainer ratio={25} {...{background: ColorConstant.BLACK}}>
                    <Intro />
                </DivideContainer>
                <DivideContainer ratio={75} {...{background: ColorConstant.LIGHT_GREY}}>
                    {/* Menu Bar */}
                </DivideContainer>
            </DivideContainer>
            <DivideContainer direction='column' ratio={80}>
                <DivideContainer ratio={7} {...{background: ColorConstant.BLACK, 
                    minHeight: homeConstant.TOPBAR_MIN_HEIGHT}}>
                </DivideContainer>
                <DivideContainer ratio={93} {...{background: ColorConstant.WHITE}}>
                    <Brief />
                </DivideContainer>
            </DivideContainer>
        </DivideContainer>
        <FlexContainer width='100%' {...{minHeight: homeConstant.SCREEN_HEIGHT}}>
            <FlexItem width='100%' flexBasis='0' flexGrow={100} {...{background: ColorConstant.BLACK}}>
                
            </FlexItem>
        </FlexContainer>
        </Scaffold>
    )
}
