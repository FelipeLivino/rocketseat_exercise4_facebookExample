import React from 'react';
import CommentItem from './CommentItem';


import stdUserImage from '../assets/baseUser.png';

function PostItem({postObject}){
    return (
        <>
            <div className="postItemMainDiv">
                <div className="postItemUserInfo">
                    <img src={stdUserImage} height="40px"/>
                    <div className="postItemUserNameDiv">
                        <span className="postItemUserName">{postObject.author.name}</span> 
                        <span className="postItemData">{postObject.date}</span>
                    </div>
                </div>
                <span className="postItemComment">{postObject.content}</span>
                <div className="divisorLine"></div>
                {postObject.comments.map(comment => 
                    <CommentItem 
                    key={comment.id}
                    comment={comment}
                    />
                )}
                <div className="postItemFooter"></div>
            </div>
            
        </>
    );
}

export default PostItem;
