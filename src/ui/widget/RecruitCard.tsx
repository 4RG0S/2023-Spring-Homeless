import React from "react";
import { Text  } from "./TextWidgets";
import { ColorConstant, ResponsiveFontSizeConstant } from "../../GlobalConstant";
import styled from "styled-components";

const RecruitCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: auto;
  min-height: 30vh;
  background-color: ${ColorConstant.WHITE};
  border: 1px solid rgba(128, 128, 128, 0.1);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.3) 5px 5px 7px;
  margin: 10% 5%;
  padding: 0 1%;

  @media (max-width: 767px) {
    margin-top: 15vh;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    margin-top: 15vh;
  }
  
  @media (min-width: 992px) {
    margin-top: 10vh;
  }
`

type RecruitCardProps = {
  img: string;
  name: string;
  greeting: string;
};

const RecruitCard: React.FC<RecruitCardProps> = ({ img, name, greeting }) => {
  return (
    <RecruitCardContainer>
      <div style={{width: "auto", height: "auto"}}>
        <img src={img} alt={`${name}'s profile`} style={{width: "100%", height: "100%", objectFit: "contain"}} />
      </div>
      <Text fontWeight="bold" fontSize={ResponsiveFontSizeConstant.SMALL}>{name}</Text>
      <Text>{greeting}</Text>
    </RecruitCardContainer>
  );
};


export default RecruitCard;
