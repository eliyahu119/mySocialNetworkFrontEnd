import React, { useState } from 'react'
import ProfilePic from "./ProfilePic"
import"../styles/Comments.css";
import LikeComponent from './LikeComponent';
import CommentWriter from './CommentWriter';


//the comments compoent
export default function Comments({comments,postID}) {
  //the  single comment component
    const Comment=({comment})=> {
        return (
            <div className='Comment'>
            <ProfilePic gender={comment.userID.gender} />
              <div className="Name">
                {comment.userID.user}
              </div>
              <div className=' text-gray-500  text-xs'> {/** the date conteiner */}
          {new Date(comment.date).formatedDate()} 
        </div>
            <div className=' text-sm p-3' >
             {comment.content}
            </div>
           <LikeComponent likes={comment.likes} ID={comment._id} />
            </div>
        )
      }
  return (
    <div className={"Comment-section"}>
    <CommentWriter postID={postID} />
    {comments&&
     comments.map((comment)=>(<Comment comment={comment} key={comment._id}/>))}
    </div>
  )
}

 
