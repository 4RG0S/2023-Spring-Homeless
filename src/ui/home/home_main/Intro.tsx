import React from "react";
import { FlexContainer } from '../../widget/FlexContainer';
import { FlexItem } from '../../widget/FlexItem';
import { Text } from "../../widget/TextWidgets";
import { ColorConstant } from '../../../GlobalConstant';
import logo from '../../../assets/svg/logo.svg';
import './Intro.css';

const LogoIconSmall = () => (
    <img src={logo} className='flip-item' width='15rem' alt='Logo Icon' style={{ marginTop: '20px' }} />
);

export const Intro = (): JSX.Element => {
    return (
        <FlexContainer width='80%' flexDirection='column' justifyContent='center' alignItems='center'>
            <FlexItem {...{ display: 'block' }}>
                <LogoIconSmall />
                <Text color={ColorConstant.WHITE} fontWeight='bold'>
                    hacktheworld<br />
                    for<br />
                    everyone.<br />
                </Text>
                <Text color='grey' fontWeight={200}>ARGOS</Text>
            </FlexItem>
        </FlexContainer>
    );
}
