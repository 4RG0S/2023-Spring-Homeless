import React from "react";
import { Link } from "react-router-dom";
import DivideContainer from "../../widget/Divider";
import { ColorConstant } from "../../../GlobalConstant";
import { ResponsiveText } from "../../widget/TextWidgets";

const DUMMY_NOTICE = {
  imageUrl: require("../../../assets/images/noticeImage.png"),
  url: "/",
  title: "2023 2nd ARGOS Seminar",
  content: "ARGOS, the security club at our university, recently held a seminar on cybersecurity. We discussed various topics related to security, including password management, phishing attacks, and malware prevention."
};

type HomeNoticeProps = {
  screen_height: String;
};

const HomeNotice = ({ screen_height }: HomeNoticeProps) => {
  return (
    <DivideContainer
      direction="column"
      ratio={1}
      {...{ minHeight: screen_height, backgroundColor: ColorConstant.BLACK }}
    >
      <DivideContainer
        direction="row"
        ratio={8}
        {...{
          backgroundImage: `url(${DUMMY_NOTICE.imageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <DivideContainer direction="row" ratio={1} {...{margin: "2%",  alignItems:"flex-start", justifyContent:"space-between", overflow: "hidden"}}>
          <ResponsiveText width={["70%", "80%", "85%"]}  {...{color: "white", margin: "0"}}>
            Our best contribution
            <br />
            to the world
          </ResponsiveText>
          <Link
            to={DUMMY_NOTICE.url}
            style={{
              color: "white",
              fontWeight: 200,
              textDecoration: "none",
              cursor: "pointer"
            }}
          >
            Learn more &gt;
          </Link>
        </DivideContainer>
      </DivideContainer>

      <DivideContainer
        direction="column"
        ratio={2}
      >
        <ResponsiveText width={["70%", "80%", "85%"]} fontSize="Large" color="white" fontWeight="400" {...{margin: "1% 3%"}}>{DUMMY_NOTICE.title}</ResponsiveText>
        <ResponsiveText 
          width={["70%", "80%", "70%"]}
          fontSize="Small" 
          fontWeight={200}
          color="white" 
          {...{ whiteSpace: "pre-line" }}
          {...{ margin: "2% 3%", marginTop: "0.5%" }}
        >
          {DUMMY_NOTICE.content.split(". ").map((sentence, index) => 
            index !== DUMMY_NOTICE.content.split(". ").length - 1 ? sentence + ". " : sentence
            ).join("\n")}
        </ResponsiveText>
      </DivideContainer>
      
    </DivideContainer>
  );
};

export default HomeNotice;
