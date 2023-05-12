import React from "react";
import { FlexContainer } from '../widget/FlexContainer';
import { FlexItem } from '../widget/FlexItem';
import { GlobalConstant } from '../../GlobalConstant'; 
import logo from './logo.svg';
import './Intro.css';

const LogoIconSmall = () => (
    <img src={logo} className='flip-item' width='15rem' alt="Logo Icon" />
);

export const Intro = (): JSX.Element => {
    return (
        <>
        <FlexContainer width='80%' flexDirection='column' justifyContent='center' alignItems='center'>
            <FlexItem {...{display: 'block'}}>
                <LogoIconSmall />
                <p style={{color: GlobalConstant.WHITE, fontWeight: 'bold'}}>
                    hacktheworld<br />
                    for<br />
                    everyone.<br />
                </p>
                <p style={{color: 'grey', fontWeight: 200}}>ARGOS</p>
            </FlexItem>
        </FlexContainer>
        </>
    );
}
