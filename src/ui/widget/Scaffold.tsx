import React from "react"

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

const Scaffold: React.FC<ScaffoldProps> = ({
    children = undefined,
    height = undefined,
    width = scaffoldConstant.SCREEN_WIDTH,
    minHeight = undefined,
    minWidth = scaffoldConstant.SCREEN_MIN_WIDTH,
    ...otherAttributes
}) => {
    return (
        <div style={{
            height: height,
            width: width,
            minHeight: minHeight,
            minWidth: minWidth,
            ...otherAttributes
        }}>
            {children}
        </div>
    )
}

export default Scaffold;
