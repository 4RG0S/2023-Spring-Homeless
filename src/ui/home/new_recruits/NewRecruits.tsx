import React from "react";
import DivideContainer from "../../widget/Divider";
import { ResponsiveText } from "../../widget/TextWidgets";
import { ColorConstant } from "../../../GlobalConstant";
import RecruitCard from "../../widget/RecruitCard";
import Slick from "../../widget/Slick";

const DUMMY = [
  {
    img : "https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66113e2bd2b7407c8202a97d2241a96625",
    name : "함윤식",
    greeting: "종강 내놔~ 종강하고 싶은 함윤식 폼 미쳤다."
  },
  {
    img : "https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66f604e7b0e6900f9ac53a43965300eb9a",
    name : "함윤식",
    greeting: "분신술 쓰는 함윤식 폼 미쳤다."
  },
  {
    img : "https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e668f324a0b9c48f77dbce3a43bd11ce785",
    name : "함윤식",
    greeting: "득도한 함윤식 폼 미쳤다."
  },
  {
    img : "https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e669f5287469802eca457586a25a096fd31",
    name : "함윤식",
    greeting: "함윤식 그냥 미쳤다."
  },
  {
    img : "https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e669f5287469802eca457586a25a096fd31",
    name : "함윤식",
    greeting: "함윤식 그냥 미쳤다."
  }
]

type NewRecruitsProps = {
    screen_height: String
};

const NewRecruits = ({
    screen_height,
}: NewRecruitsProps) => {
  return (
    <DivideContainer
      direction="column"
      height="100vh"
      {...{ minHeight: screen_height, backgroundColor: ColorConstant.BLACK }}
    >
      {/* Recruit */}
      <DivideContainer direction="column" ratio={8} height="100%" {...{backgroundColor: ColorConstant.WHITE}}>
        <DivideContainer direction="column" ratio={1} {...{color: "black"}}>
          <ResponsiveText color="black" {...{margin: "2% 3%"}}>New Recruits</ResponsiveText>
        </DivideContainer>
        <DivideContainer direction="row" ratio={9} width="100%" height="100%">
          <Slick className="center" autoplay={2000} centerMode={true} infinite={true} slidesToShow={DUMMY.length > 3 ? 3 : DUMMY.length}>
            {DUMMY.map(({ img, name, greeting }, idx) => (
                <RecruitCard img={img} name={name} greeting={greeting} key={idx}/>
            ))}
          </Slick>
        </DivideContainer>
      </DivideContainer>

      {/* footer? */}
      <DivideContainer direction="column" ratio={2}></DivideContainer>
    </DivideContainer>
  );
};

export default NewRecruits;
