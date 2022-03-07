import React, { useContext, useState } from 'react'
import ProfilePic from './ProfilePic'
import axios from 'axios'
import '../styles/postWriter.css' 
import {setCommentContext} from '../contex/setCommentContext'



/**
 * post writer
 * @returns 
 */
export default function CommentWriter({postID }) {
const AddComment=useContext(setCommentContext)
const [content, setContent] = useState('')

 const onChangeContent =(e)=>{  
   setContent(e.target.value)
 }
/**
 * sends the post to the server 
 * @param {} e 
 */
 const sendcomment=(e)=>{
   if(content.length<10){
    alert("use more than 10 charcters") //put here the cool alert
     return 
   }
  axios.post('http://127.0.0.1:80/comment',{content,postID},
  {
      headers:{
          'x-access-token':localStorage.getItem('token')
       }
  }
  ).then(res=>res.data).then(data=>
 {
  console.log(data)
  AddComment(postID,data.data)
})
  .catch(e=>console.log(e))
  setContent('')
 }
  return (
    <div className='CommentWriterClass'>
    <ProfilePic gender={JSON.parse(localStorage['userInfo']).gender}/>
    <input className='CommentInputClass' 
    value={content} 
    maxLength='60'
    minLength={10} 
    onChange={onChangeContent}
    required
    id="" />
    <button onClick={sendcomment}>send post</button>
    </div>
  )
}
