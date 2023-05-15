import React from "react";

type FlexItemProps = {
    children?: React.ReactNode,
    flexBasis?: string,
    flexGrow?: number,
    flexShrink?: number,
    width?: string,  // <length>
    height?: string  // <length>
    id?: string,
    className?: string
}

export const FlexItem: React.FC<FlexItemProps> = ({
    children = null,
    flexBasis = 'auto',
    flexGrow = 0,
    flexShrink = 1,
    width = 'auto',
    height = 'auto',
    id = '',
    className = '',
    ...otherAttributes
}) => {
    return <div id={id} className={className} style={{
        display: 'flex',
        flexBasis: flexBasis,
        flexGrow: flexGrow,
        flexShrink: flexShrink,
        width: width,
        height: height,
        ...otherAttributes
    }}>
        {children}
    </div>
};
