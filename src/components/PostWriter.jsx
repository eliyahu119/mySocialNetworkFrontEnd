import React, { useState } from 'react'
import ProfilePic from './ProfilePic'
import axios from 'axios'
import '../styles/postWriter.css' 


/**
 * post writer
 * @returns 
 */
export default function PostWriter({Addpost}) {
const [content, setContent] = useState('')

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
  axios.post('http://127.0.0.1:80/post',{content},
  {
      headers:{
          'x-access-token':localStorage.getItem('token')
       }
  }
  ).then(res=>res.data).then(data=>Addpost(data))
  .catch(e=>console.log(e))
  setContent('')
 }
  return (
    <div className='PostClass'>
    <ProfilePic gender={JSON.parse(localStorage['userInfo']).gender}/>
    <textarea className='postInputClass' 
    value={content} 
    maxLength='60'
    minLength={10} 
    onChange={onChangeContent}
    required
    id="" />
    <button onClick={sendpost}>send post</button>
    </div>
  )
}
