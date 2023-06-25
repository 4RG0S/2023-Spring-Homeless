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
    return (
        <FlexContainer flexDirection='column' 
            {...{background: ColorConstant.BLACK, borderRadius: '20px'}}>
            <Thumbnail post={post} />
            <div style={{padding: '0 20px'}}>
                <UserDateIcon post={post} />
                <TitleBoard post={post} />
                <Tags post={post} />
            </div>
        </FlexContainer>
    );
};

const Thumbnail = ({post}: PostCardProps) => {
    if (post.thumbnailURL)
        return (<img src={post.thumbnailURL} width='100%' height='200px' 
            style={{borderRadius: '20px', objectFit: 'cover'}} />);
    else return <></>;
}

const UserDateIcon = ({post}: PostCardProps) => {
    const createdAt = `${post.createdAt.getFullYear()}.${post.createdAt.getMonth()}.${post.createdAt.getDate()}.`
    const imgURL = post.thumbnailURL ? post.thumbnailURL : logo;

    return (
        <FlexContainer justifyContent='space-between' alignItems="center">
            <ResponsiveText fontSize='Small' fontWeight={200} color={ColorConstant.WHITE}>
                {post.user.name} | {createdAt}
            </ResponsiveText>
            <UserIconSmall imgURL={imgURL} />
        </FlexContainer>
    );
}

const TitleBoard = ({post}: PostCardProps) => {
    return (
        <>
        <ResponsiveText fontSize="Small" fontWeight={400} color={ColorConstant.WHITE} wordWarp="break-word">
                {post.title}
        </ResponsiveText>
        <ResponsiveText fontSize="Small" fontWeight={200} color={ColorConstant.DEEP_GREY} {...{margin: '0'}}>
            {post.postedBoard} Board
        </ResponsiveText>
        </>
    );
}

const Tags = ({post}: PostCardProps) => {
    return (
        <FlexContainer flexWrap="wrap" {...{margin: '10px 0 20px 0'}}>
            {post.tags.map(tag => (
                <ResponsiveText key={tag} fontSize="Small" fontWeight={200} color={ColorConstant.LIGHT_BLUE} 
                    {...{margin: '0 10px 0 0'}}>
                    #{tag}
                </ResponsiveText>
            ))}
        </FlexContainer>
    );
}

const UserIconSmall = ({imgURL}: {imgURL: string}) => (
    <img src={imgURL} width='35rem' height='35rem' style={{borderRadius: '50%', objectFit: 'cover'}} />
);

export default PostCard;
