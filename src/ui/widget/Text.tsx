import React from "react";

type TextProps = {
    children?: React.ReactNode,
    color?: string,
    fontSize?: string | number,
    fontWeight?: string | number,
    width?: string,  // <length>
    height?: string  // <length>
    id?: string,
    className?: string
};

export const Text: React.FC<TextProps> = ({
    children = null,
    color = undefined,
    fontSize = undefined,
    fontWeight = undefined,
    width = 'auto',
    height = 'auto',
    id = '',
    className = '',
    ...otherAttributes
}) => {
    return <p id={id} className={className} style={{
        color: color,
        fontSize: fontSize,
        fontWeight: fontWeight,
        width: width,
        height: height,
        ...otherAttributes
    }}>
        {children}
    </p>
};

