import React from "react";
import Scaffold from "../widget/Scaffold";
import HomeMain from "./home_main/HomeMain";
import HomeNotice from "./home_notice/HomeNotice";
import NewRecruits from "./new_recruits/NewRecruits";
import ScrollAnimationWrapper from "../widget/ScrollAnimationWrapper";
import useScrollFade from "../../hooks/useScrollFade";

const homeConstant = {
  SCREEN_HEIGHT: "100vh",
  SCREEN_WIDTH: "100vw",
  SIDEBAR_MIN_WIDTH: 200,
  TOPBAR_MIN_HEIGHT: 60,
};

export const Home = (): JSX.Element => {
  const animatedItem_HomeMain = useScrollFade({
    duration: 1,
  });
  const animatedItem_HomeNotice = useScrollFade({
    duration: 1,
  });
  const animatedItem_NewRecruits = useScrollFade({
    duration: 1,
  });
  return (
    <Scaffold>
      <ScrollAnimationWrapper myRef={animatedItem_HomeMain.ref} style={{...animatedItem_HomeMain.style}}>
        <HomeMain
          screen_height={homeConstant.SCREEN_HEIGHT}
          sidebar_min_width={homeConstant.SIDEBAR_MIN_WIDTH}
          topbar_min_height={homeConstant.TOPBAR_MIN_HEIGHT}
        />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper myRef={animatedItem_HomeNotice.ref} style={{...animatedItem_HomeNotice.style}}>
        <HomeNotice screen_height={homeConstant.SCREEN_HEIGHT} />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper myRef={animatedItem_NewRecruits.ref} style={{...animatedItem_NewRecruits.style}}>
        <NewRecruits screen_height={homeConstant.SCREEN_HEIGHT} />
      </ScrollAnimationWrapper>
    </Scaffold>
  );
};
