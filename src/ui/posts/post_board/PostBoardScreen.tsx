import React, { useState } from 'react';
import AppBar from '../widget/AppBar';
import DivideContainer from '../../widget/Divider';
import { styled } from 'styled-components';
import { ColorConstant, ResponsiveSizeConstant } from '../../../GlobalConstant';
import { ResponsiveText, Text } from '../../widget/TextWidgets';
import Scaffold from '../../widget/Scaffold';
import FlexContainer from '../../widget/FlexContainer';
import PostsView from '../posts_view/PostsView';

const PostBoardScreen = () => {
    const [selectedMenu, setSelectedMenu] = useState(0);
    const menuTextSize = "Tiny";

    return <Scaffold height='100vh' {...{background: ColorConstant.BLACK}}>
        <AppBar />
        <BlackBackground>
            <DivideContainer direction='row' height='100%'>
                <DivideContainer direction='column' ratio={2} disappearable={true} height='100%'
                    maxConditionWidth={ResponsiveSizeConstant.TABLET_SCREEN_MAX_WIDTH}>
                    <MenuBarContainer>
                        <InterestCategory>
                            <FlexContainer alignItems='center'>
                                <Text {...{margin: '0'}}>✏️</Text>
                                <Text fontSize={16} fontWeight={'bold'} {...{ margin: '0 35px 0 10px' }}>BOARD</Text>
                            </FlexContainer>
                            <Text fontSize={20} {...{ margin: 0 }}>⋯</Text>
                        </InterestCategory>
                        <MenuBarItem $selected={selectedMenu === 0} onClick={() => setSelectedMenu(0)}>
                            <ResponsiveText fontSize={menuTextSize} {...{margin: '0'}}>ANNOUNCEMENT</ResponsiveText>
                        </MenuBarItem>
                        <MenuBarItem $selected={selectedMenu === 1} onClick={() => setSelectedMenu(1)}>
                            <ResponsiveText fontSize={menuTextSize} {...{margin: '0'}}>FREE</ResponsiveText>
                        </MenuBarItem>
                        <MenuBarItem $selected={selectedMenu === 2} onClick={() => setSelectedMenu(2)}>
                            <ResponsiveText fontSize={menuTextSize} {...{margin: '0'}}>GALLERY</ResponsiveText>
                        </MenuBarItem>
                        <MenuBarItem $selected={selectedMenu === 3} onClick={() => setSelectedMenu(3)}>
                            <ResponsiveText fontSize={menuTextSize} {...{margin: '0'}}>EVENT</ResponsiveText>
                        </MenuBarItem>
                    </MenuBarContainer>
                    <MenuBarContainer>
                        <InterestCategory>
                            <FlexContainer alignItems='center'>
                                <Text {...{margin: '0'}}>⚙️</Text>
                                <Text fontSize={16} fontWeight={'bold'} {...{ margin: '0 35px 0 10px' }}>OLD</Text>
                            </FlexContainer>
                        </InterestCategory>
                        <MenuBarItem $selected={selectedMenu === 4} onClick={() => setSelectedMenu(4)}>
                            <ResponsiveText fontSize={menuTextSize} {...{margin: '0'}}>ARM</ResponsiveText>
                        </MenuBarItem>
                        <MenuBarItem $selected={selectedMenu === 5} onClick={() => setSelectedMenu(5)}>
                            <ResponsiveText fontSize={menuTextSize} {...{margin: '0'}}>ALGORITHM</ResponsiveText>
                        </MenuBarItem>
                        <MenuBarItem $selected={selectedMenu === 6} onClick={() => setSelectedMenu(6)}>
                            <ResponsiveText fontSize={menuTextSize} {...{margin: '0'}}>HARDWARE</ResponsiveText>
                        </MenuBarItem>
                        <MenuBarItem $selected={selectedMenu === 7} onClick={() => setSelectedMenu(7)}>
                            <ResponsiveText fontSize={menuTextSize} {...{margin: '0'}}>WEB DEVELOPMENT</ResponsiveText>
                        </MenuBarItem>
                    </MenuBarContainer>
                </DivideContainer>
                <DivideContainer ratio={8} height='100%'>
                    <PostsView />
                </DivideContainer>
            </DivideContainer>
        </BlackBackground>
    </Scaffold>
};

export default PostBoardScreen;

const BlackBackground = styled.div`
    background-color: ${ColorConstant.BLACK};
    color: ${ColorConstant.WHITE};
    height: 100%;
`;

const InterestCategory = styled.div`
    padding: 10px 30px;
    border-radius: 30px;
    margin-bottom: 30px;
    cursor: pointer;
    background-color: #252525;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const MenuBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 25px 40px
`;

const MenuBarItem = styled.div<{ $selected?: boolean }>`
    font-weight: ${({ $selected = false }) => ($selected ? 'bold' : 'normal')};
    padding: 0 25px;
    margin-bottom: 20px;
    cursor: pointer;
`;
