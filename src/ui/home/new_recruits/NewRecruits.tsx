import React from "react";
import DivideContainer from "../../widget/Divider";

type NewRecruitsProps = {
    screen_height: String
};

const NewRecruits = ({
    screen_height,
}: NewRecruitsProps) => {
    return (
        <DivideContainer {...{ minHeight: screen_height }}>
        </DivideContainer>
    );
};

export default NewRecruits;
