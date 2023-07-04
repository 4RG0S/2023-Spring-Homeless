import React from "react";

type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  myRef: React.RefObject<HTMLDivElement>;
};

const ScrollAnimationWrapper = ({ children, style, myRef }: Props) => {
  return (
    <div ref={myRef} style={style}>
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper;
