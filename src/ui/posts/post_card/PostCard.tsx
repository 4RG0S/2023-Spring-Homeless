import React from "react";
import Post from "../../../model/Post";
import FlexContainer from "../../widget/FlexContainer";
import { ColorConstant } from "../../../GlobalConstant";
import { ResponsiveText } from "../../widget/TextWidgets";
import logo from "../../../assets/svg/logo.svg";


type PostCardProps = {
    post: Post
}


const PostCard = ({post}: PostCardProps): JSX.Element => {
    const createdAt = `${post.createdAt.getFullYear()}.${post.createdAt.getMonth()}.${post.createdAt.getDate()}.`
    const imgURL = post.thumbnailURL ? post.thumbnailURL : logo;
    
    return (
        <FlexContainer flexDirection='column' 
            {...{background: ColorConstant.BLACK, padding: '0 20px', borderRadius: '20px'}}>
            <FlexContainer justifyContent='space-between' alignItems="center">
                <ResponsiveText fontSize='Small' fontWeight={200} color={ColorConstant.WHITE}>
                    {post.user.name} | {createdAt}
                </ResponsiveText>
                <UserIconSmall imgURL={imgURL} />
            </FlexContainer>
            <ResponsiveText fontSize="Small" fontWeight={400} color={ColorConstant.WHITE} wordWarp="break-word">
                {post.title}
            </ResponsiveText>
            <ResponsiveText fontSize="Small" fontWeight={200} color={ColorConstant.DEEP_GREY} {...{margin: '0'}}>
                {post.postedBoard} Board
            </ResponsiveText>
            <FlexContainer flexWrap="wrap" {...{margin: '10px 0 20px 0'}}>
                {post.tags.map(tag => (
                    <ResponsiveText key={tag} fontSize="Small" fontWeight={200} color={ColorConstant.LIGHT_BLUE} 
                        {...{margin: '0 10px 0 0'}}>
                        #{tag}
                    </ResponsiveText>
                ))}
            </FlexContainer>
        </FlexContainer>
    );
};

const UserIconSmall = ({imgURL}: {imgURL: string}) => (
    <img src={imgURL} width='35rem' height='35rem' style={{borderRadius: '50%', objectFit: 'cover'}} />
);

export default PostCard;
