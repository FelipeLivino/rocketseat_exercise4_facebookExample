import React from 'react';
import stdUserImage from '../assets/baseUser.png';

function CommentItem({comment}){
    return (
        <div className="CommentItemDiv">
            <img src={stdUserImage} height="40px"/>
            <div className="CommentItemInternDiv">
                <span className="CommentItemInternDivName">{comment.author.name}</span>
                <span className="CommentItemInternDivComment">{comment.content}</span>
            </div>
        </div>
    );
}

export default CommentItem;
