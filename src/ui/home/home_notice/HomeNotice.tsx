import React from "react";
import DivideContainer from "../../widget/Divider";
import { ColorConstant } from "../../../GlobalConstant";
import FlexContainer from "../../widget/FlexContainer";

const DUMMY_NOTICE = {
  imageUrl: require("../../../assets/images/noticeImage.png"),

};

type HomeNoticeProps = {
  screen_height: String;
};

const HomeNotice = ({ screen_height }: HomeNoticeProps) => {
  return (
    <DivideContainer
      direction="column"
      {...{ minHeight: screen_height, backgroundColor: ColorConstant.BLACK }}
    >
      <FlexContainer
        height="75vh"
        {...{
          backgroundImage: `url(${DUMMY_NOTICE.imageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
      </FlexContainer>
    </DivideContainer>
  );
};

export default HomeNotice;
