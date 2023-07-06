import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
import { ColorConstant } from "../../../GlobalConstant";
import { ResponsiveText } from "../../widget/TextWidgets";
import UserRepository from "../../../repo/UserRepository";
import UserDummyRepositoryImpl from "../../../repo/dummy/UserDummyRepositoryImpl";
import User from "../../../model/User";
import logo from "../../../assets/svg/logo.svg";

const LogoIconMedium = () => (
    <img src={logo} width='30%' height='100%' alt='Logo Icon' style={{ maxWidth: '35px', marginRight: '10px' }} />
);

const UserIconSmall = ({imgURL}: {imgURL: string}) => (
    <img src={imgURL} width='30px' height='30px' 
         style={{borderRadius: '50%', objectFit: 'cover', margin: '10px 0'}}
         alt="UserIcon" />
);

const AppBar = () => {
    const [user, updateUser] = useState<User>();
    const imgURL = user?.imageURL ? user?.imageURL : logo;

    useEffect(() => {
        const getUser = async () => {
            const userRepository: UserRepository = UserDummyRepositoryImpl.getInstance();
            const user: User | null = await userRepository.getUser("<userId>");
            if (user !== null) updateUser(user as User);
            else throw new Error("NoUserException");
        }
        getUser();
    }, []);

    return <AppBarContainer>
        <Link to='/' style={{textDecoration: 'none'}}>
            <AppBarItem $changeCursor={true}>
                <LogoIconMedium />
                <ResponsiveText fontSize="Tiny" {...{margin: '0', display: 'flex'}}>
                    ARGOS
                </ResponsiveText>
            </AppBarItem>
        </Link>
        <AppBarItem $flexGrow={true}>{<MenuBar />}</AppBarItem>
        <AppBarItem $changeCursor={true}>
            <UserIconSmall imgURL={imgURL} />
            <ResponsiveText fontSize="Tiny" {...{margin: '0 0 0 10px'}}>| {user?.name}</ResponsiveText>
        </AppBarItem>
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
    display: flex;
    align-items: center;
    color: ${ColorConstant.WHITE};
    font-size: 18px;
    padding: 0px 30px;
    flex-grow: ${({ $flexGrow = false }) => $flexGrow ? 1 : 0};
    cursor: ${({ $changeCursor = false }) => $changeCursor ? 'pointer' : 'default'};
`;

const MenuBar = () => {
    const [selectedMenu, setSelectedMenu] = React.useState(0);

    return <MenuBarContainer>
        <MenuBarItem $selected={selectedMenu === 0} onClick={() => setSelectedMenu(0)}>
            <ResponsiveText fontSize="Tiny" {...{margin: '0'}}>ABOUT</ResponsiveText>
        </MenuBarItem>
        <MenuBarItem $selected={selectedMenu === 1} onClick={() => setSelectedMenu(1)}>
            <ResponsiveText fontSize="Tiny" {...{margin: '0'}}>POSTS</ResponsiveText>
        </MenuBarItem>
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
