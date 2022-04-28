import React, { useState } from 'react'
import ProfilePic from "./ProfilePic"
import LikeComponent from './LikeComponent';
import CommentWriter from './CommentWriter';
import Comment from './Comment.jsx'

//the comments compoent
export default function Comments({comments,postID}) {
  //the  single comment component

  return (
    <div className=" border-gray-300 rounded-md  ">
    <CommentWriter postID={postID} />
    <div className=' block max-w-xl m-auto justify-center align-middle'>
    {comments&&comments.map((comment)=>(<Comment comment={comment} postID={postID} key={comment._id}/>))}
     </div>
    </div>
  )
}

 
