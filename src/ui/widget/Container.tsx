import React from 'react';

type ContainerProps = {
    children: JSX.Element;
    backgroundColor?: string;
    color?: string;
};

export const Container: React.FC<ContainerProps> = ({
    children,
    backgroundColor,
    color,
}) => {
    return (
        <span style={{ display: "inline-block", backgroundColor: backgroundColor, color: color }}>
            {children}
        </span>
    );
};
