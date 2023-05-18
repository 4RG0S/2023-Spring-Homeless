import React from "react";
import { useMediaQuery } from 'react-responsive';
import { ResponsiveSizeConstant, ResponsiveFontSizeConstant } from "../../GlobalConstant";

type TextProps = {
    children: React.ReactNode,
    color?: string,
    fontSize?: string | number,
    fontWeight?: string | number,
    width?: string,  // <length>
    height?: string  // <length>
    id?: string,
    className?: string
};

type ResponsiveTextProps = {
    children: React.ReactNode,
    color?: string,
    fontSize?: 'Large' | 'Medium' | 'Small' | string,
    fontWeight?: string | number,
    width?: string | Array<string>,  // <length>
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
    id = undefined,
    className = undefined,
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

export const ResponsiveText: React.FC<ResponsiveTextProps> = ({
    children = null,
    color = undefined,
    fontSize = 'Large',
    fontWeight = undefined,
    width = 'auto',
    height = 'auto',
    id = undefined,
    className = undefined,
    ...otherAttributes
}) => {
    const isTabletScreen = useMediaQuery({
        minWidth: ResponsiveSizeConstant.TABLET_SCREEN_MIN_WIDTH,
        maxWidth: ResponsiveSizeConstant.TABLET_SCREEN_MAX_WIDTH
    });
    const isMobileScreen = useMediaQuery({ maxWidth: ResponsiveSizeConstant.MOBILE_SCREEN_MAX_WIDTH });
    
    let selectedFontSize: string;
    let selectedWidth: string;

    if (fontSize === 'Large') selectedFontSize = ResponsiveFontSizeConstant.LARGE;
    else if (fontSize === 'Medium') selectedFontSize = ResponsiveFontSizeConstant.MEDIUM;
    else if (fontSize === 'Small') selectedFontSize = ResponsiveFontSizeConstant.SMALL;
    else selectedFontSize = fontSize;

    if (isMobileScreen) selectedWidth = typeof width === 'object' ? width[0] : width;
    else if (isTabletScreen) selectedWidth = typeof width === 'object' ? width[1] : width;
    else selectedWidth = typeof width === 'object' ? width[2] : width;  // Desktop Screen

    return <p id={id} className={className} style={{
        color: color,
        fontSize: selectedFontSize,
        fontWeight: fontWeight,
        width: selectedWidth,
        height: height,
        wordWrap: 'break-word',
        ...otherAttributes
    }}>
        {children}
    </p>
};
