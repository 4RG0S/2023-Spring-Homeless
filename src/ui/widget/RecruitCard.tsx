import React from "react";
import { Text  } from "./TextWidgets";
import { ColorConstant, ResponsiveFontSizeConstant } from "../../GlobalConstant";

type RecruitCardProps = {
  img: string;
  name: string;
  greeting: string;
};

const RecruitCard: React.FC<RecruitCardProps> = ({ img, name, greeting }) => {
  return (
    <div
      style={{
        minWidth: "20%",
        height: "55vh",
        backgroundColor: ColorConstant.WHITE,
        border: "1px solid rgba(128, 128, 128, 0.1)",
        borderRadius: "10px",
        boxShadow: "rgba(0, 0, 0, 0.3) 5px 5px 7px",
        margin:  "3% 5%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 1%"
      }}
    >
      <div style={{width: "auto", height: "auto"}}>
        <img src={img} alt={`${name}'s profile`} style={{width: "100%", height: "100%", objectFit: "contain"}} />
      </div>
      <Text fontWeight="bold" fontSize={ResponsiveFontSizeConstant.SMALL}>{name}</Text>
      <Text>{greeting}</Text>
    </div>
  );
};


export default RecruitCard;
