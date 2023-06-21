import React from "react";
import styled from "styled-components"
import { ColorConstant } from "../../../../GlobalConstant";

type AppBarProps = {
    userName?: string;
}

const AppBar = ({ userName }: AppBarProps) => {
    return <AppBarContainer>
        <AppBarItem $changeCursor={true}>ARGOS</AppBarItem>
        <AppBarItem $flexGrow={true}>{<MenuBar />}</AppBarItem>
        <AppBarItem $changeCursor={true}>{userName}</AppBarItem>
    </AppBarContainer>
};

export default AppBar;

const AppBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    background-color: ${ColorConstant.BLACK};
    color: ${ColorConstant.WHITE};
`;

const AppBarItem = styled.div<{ $flexGrow?: boolean, $changeCursor?: boolean }>`
    color: ${ColorConstant.WHITE};
    font-size: 18px;
    padding: 0px 30px;
    flex-grow: ${({ $flexGrow = false }) => $flexGrow ? 1 : 0};
    cursor: ${({ $changeCursor = false }) => $changeCursor ? 'pointer' : 'default'}})};
`;

const MenuBar = () => {
    const [selectedMenu, setSelectedMenu] = React.useState(0);

    return <MenuBarContainer>
        <MenuBarItem $selected={selectedMenu == 0} onClick={() => setSelectedMenu(0)}>menu 1</MenuBarItem>
        <MenuBarItem $selected={selectedMenu == 1} onClick={() => setSelectedMenu(1)}>menu 2</MenuBarItem>
        <MenuBarItem $selected={selectedMenu == 2} onClick={() => setSelectedMenu(2)}>menu 3</MenuBarItem>
    </MenuBarContainer>
};

const MenuBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
`;

const MenuBarItem = styled.div<{ $selected?: boolean }>`
    padding: 5px 10px;
    margin: 0px 5px;
    border: ${({ $selected = false }) => ($selected ? `1px solid ${ColorConstant.WHITE}` : 'none')};
    border-radius: 25px;
    cursor: pointer;
`;
