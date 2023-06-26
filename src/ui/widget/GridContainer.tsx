import React from "react";

type GridContainerProps = {
  children?: React.ReactNode;
  gridTemplateRows?: string;
  gridTemplateColumns?: string;
  gridAutoRows?: string;
  gridAutoColumns?: string;
  rowGap?: string;
  columnGap?: string;
  gap?: string;
  gridAutoFlow?: 'row' | 'column' | 'dense' | 'row dense' | 'column dense' | string;
  alignItems?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
  justifyItems?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
  placeItems?: 'auto' | 'start' | 'end' | 'center' | 'stretch';
  alignContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-between' | 'space-around' | 'space-evenly';
  justifyContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-between' | 'space-around' | 'space-evenly';
  placeContent?: 'auto' | 'start' | 'end' | 'center' | 'stretch' | 'space-between' | 'space-around' | 'space-evenly';
  width?: string; // <length>
  height?: string; // <length>
  id?: string;
  className?: string;
};

const GridContainer: React.FC<GridContainerProps> = ({
  children = undefined,
  gridTemplateRows = undefined,
  gridTemplateColumns = undefined,
  gridAutoRows = undefined,
  gridAutoColumns = undefined,
  rowGap = undefined,
  columnGap = undefined,
  gap = undefined,
  gridAutoFlow = undefined,
  alignItems = undefined,
  justifyItems = undefined,
  placeItems = undefined,
  alignContent = undefined,
  justifyContent = undefined,
  placeContent = undefined,
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
        display: 'grid',
        gridTemplateRows: gridTemplateRows,
        gridTemplateColumns: gridTemplateColumns,
        gridAutoRows: gridAutoRows,
        gridAutoColumns: gridAutoColumns,
        rowGap: rowGap,
        columnGap: columnGap,
        gap: gap,
        gridAutoFlow: gridAutoFlow,
        alignItems: alignItems,
        justifyItems: justifyItems,
        placeItems: placeItems,
        alignContent: alignContent,
        justifyContent: justifyContent,
        placeContent: placeContent,
        width: width,
        height: height,
        ...otherAttributes,
      }}
    >
      {children}
    </div>
  );
};

export default GridContainer;
