import React from "react";

type GridItemProps = {
  children?: React.ReactNode;
  gridColumn?: string;
  gridColumnStart?: string;
  gridColumnEnd?: string;
  gridRow?: string;
  gridRowStart?: string;
  gridRowEnd?: string;
  justifySelf?: 'start' | 'end' | 'center' | 'stretch';
  alignSelf?: 'start' | 'end' | 'center' | 'stretch';
  placeSelf?: 'auto' | 'start' | 'end' | 'center' | 'stretch';
  width?: string;
  height?: string;
  id?: string;
  className?: string;
};

const GridItem: React.FC<GridItemProps> = ({
  children = undefined,
  gridColumn = undefined,
  gridColumnStart = undefined,
  gridColumnEnd = undefined,
  gridRow = undefined,
  gridRowStart = undefined,
  gridRowEnd = undefined,
  justifySelf = undefined,
  alignSelf = undefined,
  placeSelf = undefined,
  width = 'auto',
  height = 'auto',
  id = undefined,
  className = undefined,
  ...otherAttributes
}) => {
  return (
    <div
      id={id}
      className={className}
      style={{
        gridColumn: gridColumn,
        gridColumnStart: gridColumnStart,
        gridColumnEnd: gridColumnEnd,
        gridRow: gridRow,
        gridRowStart: gridRowStart,
        gridRowEnd: gridRowEnd,
        justifySelf: justifySelf,
        alignSelf: alignSelf,
        placeSelf: placeSelf,
        width: width,
        height: height,
        ...otherAttributes,
      }}
    >
      {children}
    </div>
  );
};

export default GridItem;
