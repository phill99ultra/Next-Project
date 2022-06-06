import { FC } from "react";
import Heading from "./heading";
import { postType } from "../typescript";

type postInfoProps = {
    post: postType
}

const PostInfo:FC<postInfoProps> = ({post}) => {   
    const { title, body } = post || {};   
    if (!post) return <Heading tag={"h3"} text={"Empty contact"}/>
    
    return (
        <>
            <Heading tag={"h3"} text={title}/>           
            <div>
                {body}
            </div>
        </>
    )
}

export default PostInfo;