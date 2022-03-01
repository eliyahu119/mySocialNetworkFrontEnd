import React from 'react'
import ProfilePic from "./ProfilePic"
import"../styles/Comments.css";
import LikeComponent from './LikeComponent';

const commentsTmp=[
  {
      name :"black angel",
      gender: 1,
      Id : 1, 
      content: "hello world!"
  } 
  , {
    name :"הסולידית",
    gender: 0,
    Id : 0, 
    content: "אתה צודק לגמרי" 
}
 , { 
  name :"דרקון המערב",
  gender: 0,
  Id : 2, 
  content: "נו באמת "
 }
] 

//the comments compoent
export default function Comments({comments}) {
  //the  single comment component
    const Comment=({comment})=> {
        return (
            <div className='Comment'>
            <ProfilePic gender={comment.userID.gender} />
              <div className="Name">
                {comment.userID.name}
              </div>
           <div >{comment.content}</div>
           <LikeComponent />
            </div>
        )
      }
  return (
    <div className={"Comment-section"}>
    {comments&&comments.map((comment)=>(<Comment comment={comment} key={comment._id}/>))}
     </div>
  )
}

 
