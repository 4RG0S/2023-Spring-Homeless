import React from "react"
import { styled } from "styled-components"

type ScaffoldProps = {
    children?: React.ReactNode,
    height?: string,
    width?: string,
    minHeight?: string,
    minWidth?: string
}

const scaffoldConstant = {
    SCREEN_HEIGHT: '100vh',
    SCREEN_WIDTH: '100vw',
    SCREEN_MIN_WIDTH: '280px'
}

const StyledScaffold = styled.div<ScaffoldProps>`
    height: ${props => props.height};
    width: ${props => props.width};
    min-height: ${props => props.minHeight};
    min-width: ${props => props.minWidth};
`;

const Scaffold: React.FC<ScaffoldProps> = ({
    children = undefined,
    height = undefined,
    width = scaffoldConstant.SCREEN_WIDTH,
    minHeight = undefined,
    minWidth = scaffoldConstant.SCREEN_MIN_WIDTH,
    ...otherAttributes
}) => {
    return (
        <StyledScaffold 
            height={height} 
            width={width} 
            minHeight={minHeight} 
            minWidth={minWidth} 
            style={{...otherAttributes}}
        >
            {children}
        </StyledScaffold>
    )
}

export default Scaffold;
