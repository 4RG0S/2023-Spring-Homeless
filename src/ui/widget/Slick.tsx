import React, { useMemo } from 'react';
import Slider, { Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


interface sliderProps {
  children: React.ReactNode;
  className?: string;
  centerMode?: boolean;
  infinite?: boolean;
  centerPadding?: string;
  autoplay?: boolean | number;
  slidesToShow: number;
  speed?: number;
  loop?: boolean;
}

const Slick = ({
  children,
  className,
  autoplay,
  centerMode = false,
  infinite,
  centerPadding = "60px",
  slidesToShow = 1,
  speed = 300,
}: sliderProps) => {
  const settings = useMemo<Settings>(
    () => ({
      dots: true,
      infinite: infinite,
      speed: speed,
      slidesToShow: slidesToShow,
      centerMode: centerMode,
      centerPadding: centerPadding,
      autoplay: Boolean(autoplay),
      autoplaySpeed: typeof autoplay === 'boolean' ? 3000 : autoplay,

    }),
    [autoplay, infinite, slidesToShow, speed, centerMode, centerPadding],
  );
  return (
    <section className={className} style={{position: "relative", width: "100%", height: "100%", overflowX: "hidden"}}>
      <Slider {...settings}>{children}</Slider>
    </section>
  );
}

export default Slick;
