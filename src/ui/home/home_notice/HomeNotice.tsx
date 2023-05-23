import React from "react";
import { Link } from "react-router-dom";
import DivideContainer from "../../widget/Divider";
import { ColorConstant } from "../../../GlobalConstant";
import FlexContainer from "../../widget/FlexContainer";
import { ResponsiveText } from "../../widget/TextWidgets";

const DUMMY_NOTICE = {
  imageUrl: require("../../../assets/images/noticeImage.png"),
  url: "/",
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
        <FlexContainer width="100%" alignItems="flex-start" justifyContent="space-between" {...{margin: "3% 3%"}}>
          <ResponsiveText {...{color: "white", margin: "0"}}>
            Our best contribution
            <br />
            to the world
          </ResponsiveText>
          <Link
            to={DUMMY_NOTICE.url}
            style={{
              color: "white",
              fontWeight: 700,
              textDecorationColor: "white",
              textDecorationThickness: "0.3px",
              WebkitTextStroke: "0.3px black",
            }}
          >
            Learn more &gt;
          </Link>
        </FlexContainer>
      </FlexContainer>
    </DivideContainer>
  );
};

export default HomeNotice;
