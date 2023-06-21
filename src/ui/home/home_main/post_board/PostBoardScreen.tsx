import React, { useState } from 'react';
import AppBar from './AppBar';
import DivideContainer from '../../../widget/Divider';
import { styled } from 'styled-components';
import { ColorConstant } from '../../../../GlobalConstant';
import { Text } from '../../../widget/TextWidgets';

const PostBoardScreen = () => {
    const userName = "김태현";
    const [selectedMenu, setSelectedMenu] = useState(0);

    return <BlackBackground>
        <AppBar userName={userName} />
        <DivideContainer direction='row' {...{ marginTop: '30px' }}>
            <DivideContainer direction='column' ratio={2} {...{ minWidth: '300px' }}>
                <MenuBarContainer>
                    <InterestCategory>
                        🏄
                        <Text fontSize={16} fontWeight={'bold'} {...{ margin: '0 10px' }}>관심 카테고리</Text>
                        <Text fontSize={20} {...{ margin: 0 }}>⋯</Text>
                    </InterestCategory>
                    <MenuBarItem $selected={selectedMenu == 0} onClick={() => setSelectedMenu(0)}>menu 1</MenuBarItem>
                    <MenuBarItem $selected={selectedMenu == 1} onClick={() => setSelectedMenu(1)}>menu 2</MenuBarItem>
                    <MenuBarItem $selected={selectedMenu == 2} onClick={() => setSelectedMenu(2)}>menu 3</MenuBarItem>
                    <MenuBarItem $selected={selectedMenu == 3} onClick={() => setSelectedMenu(3)}>menu 4</MenuBarItem>
                </MenuBarContainer>
            </DivideContainer>
            <DivideContainer ratio={8}></DivideContainer>
        </DivideContainer>
    </BlackBackground>
};

export default PostBoardScreen;

const BlackBackground = styled.div`
    background-color: ${ColorConstant.BLACK};
    color: ${ColorConstant.WHITE};
    height: 100vh;
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
`;

const MenuBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 20px;
`;

const MenuBarItem = styled.div<{ $selected?: boolean }>`
    font-size: ${({ $selected = false }) => ($selected ? '20px' : '16px')};
    font-weight: ${({ $selected = false }) => ($selected ? 'bold' : 'normal')};
    margin-bottom: 20px;
    cursor: pointer;
`;
