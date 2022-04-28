import React, {useRef, useContext, useState } from 'react'
import ProfilePic from './ProfilePic'
import axios from 'axios'
import {setCommentContext} from '../contex/setCommentContext'
import { AiOutlineSend} from "react-icons/ai"
import { useAlert } from 'react-alert'

/**
 * comment writer
 * writes the comment than sent it to the server and then display it on the page
 *  * using the context in the main page
 * @returns 
 */
export default function CommentWriter({postID }) {
const AddComment=useContext(setCommentContext)
const [content, setContent] = useState('')
const buttonRef=useRef()
const alert=useAlert();
 const onChangeContent =(e)=>{  
   setContent(e.target.value)
 }
/**
 * sends the post to the server 
 * @param {} e 
 */
 const sendcomment=(e)=>{
  setContent(content.trim());
  if(content.length<1){
     alert.show("use more than a charcter") //put here the cool alert
     return 
   }
   buttonRef.current.disabled = true;
   axios.post(`post/${postID}/comment`,{content},
  {
      headers:{
          'x-access-token':localStorage.getItem('token')
       }
  }
  ).then(res=>res.data).then(data=>
 {
  console.log(data)
  AddComment(postID,data.data)  //the context from main page
  setContent('')
})
  .catch(
    e=>console.log(e))
    .finally(
    ()=>{
          buttonRef.current.disabled = false;
        }
  )
}
  return (
    <div className='p-2 flex items-center'>
    <ProfilePic gender={JSON.parse(localStorage['userInfo']).gender}/>

    <input className='ml-3 pl-2 w-80  pb-2  pt-2 rounded-2xl bg-slate-200 ' 
    placeholder='write comment....'
    value={content} 
    maxLength={100}
    minLength={2} 
    onChange={onChangeContent}
    required
    id="" />
    <button className=' hover:text-indigo-900 text-indigo-500' ref={buttonRef} onClick={sendcomment}>< AiOutlineSend  size={25}/></button>
  
    
    
    </div>
  )
}
