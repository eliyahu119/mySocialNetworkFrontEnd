import React, { useState,useRef } from 'react'
import ProfilePic from './ProfilePic'
import axios from 'axios'
import '../styles/postWriter.css' 


/**
 * Post writer
 * writes the Post than sent it to the server and then display it on the page

 * @returns 
 */
export default function PostWriter({Addpost}) {
const [content, setContent] = useState('')
const buttonRef=useRef()

 const onChangeContent =(e)=>{  
   setContent(e.target.value)
 }
/**
 * sends the post to the server 
 * @param {} e 
 */
 const sendpost=(e)=>{
   if(content.length<10){
    alert("use more than 10 charcters") //put here the cool alert
     return 
   }
   buttonRef.current.disabled = true;
  axios.post('http://127.0.0.1:80/post',{content},
  {
      headers:{
          'x-access-token':localStorage.getItem('token')
       }
  }
  ).then(res=>res.data).then(data=>Addpost(data))
  .catch(e=>console.log(e))
  .finally(
    ()=>{buttonRef.current.disabled = false;}
  )
  setContent('')
 }
  return (
    <div className='PostClass'>
    <ProfilePic gender={JSON.parse(localStorage['userInfo']).gender}/>
    <input className='postInputClass' 
    value={content} 
    maxLength='60'
    minLength={10} 
    onChange={onChangeContent}
    required
    id="" />
    <button ref={buttonRef} onClick={sendpost}>send post</button>
    </div>
  )
}
