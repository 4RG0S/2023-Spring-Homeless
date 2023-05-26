import React from "react";
import HoverEffectButton from "../../../widget/HoverEffectButton";
import { ColorConstant } from "../../../../GlobalConstant";
import Padding from "../../../widget/Padding";
import { Text } from "../../../widget/TextWidgets";

interface HomeMenuButtonProps {
    onClick: Function,
    children: string,
};

const HomeMenuButton = ({
    onClick,
    children,
}: HomeMenuButtonProps) => {
    return (
        <HoverEffectButton
            color={ColorConstant.BLACK}
            backgroundColor={ColorConstant.LIGHT_GREY}
            colorOnHover={ColorConstant.WHITE}
            backgroundColorOnHover={ColorConstant.BLACK}
            onClick={onClick}
        >
            <Padding.all size={10}>
                <Text
                    fontSize={20}
                    {...{ textAlign: "center" }}
                >
                    {children}
                </Text>
            </Padding.all>
        </HoverEffectButton>
    );
}

export default HomeMenuButton;
