import React from "react";

type FlexContainerProps = {
    children?: React.ReactNode,
    flexDirection?: 'row' | 'column',
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse',
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly',
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch',
    alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch',
    width?: string,  // <length>
    height?: string  // <length>
    id?: string,
    className?: string
}

export const FlexContainer: React.FC<FlexContainerProps> = ({
    children = null,
    flexDirection = 'row',
    flexWrap = 'nowrap',
    justifyContent = 'flex-start',
    alignItems = 'flex-start',
    alignContent = 'flex-start',
    width = 'auto',
    height = 'auto',
    id = '',
    className = '',
    ...otherAttributes
}) => {
    return <div id={id} className={className} style={{
        display: 'flex',
        flexDirection: flexDirection,
        flexWrap: flexWrap,
        justifyContent: justifyContent,
        alignItems: alignItems,
        alignContent: alignContent,
        width: width,
        height: height,
        ...otherAttributes
    }}>
        {children}
    </div>
};
