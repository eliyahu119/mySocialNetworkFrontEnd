import React, { useState,useRef } from 'react'
import ProfilePic from './ProfilePic'
import axios from 'axios'
import { AiOutlineSend} from "react-icons/ai"
import { useAlert } from 'react-alert'
/**
 * Post writer
 * writes the Post than sent it to the server and then display it on the page

 * @returns 
 */
export default function PostWriter({Addpost}) {
const [content, setContent] = useState('')
const buttonRef=useRef()
const alert= useAlert();
 const onChangeContent =(e)=>{  
   setContent(e.target.value)
 }
/**
 * sends the post to the server 
 * @param {} e 
 */
 const sendpost=(e)=>{
   setContent(content.trim());
   if(content.length<1){
    alert.show("use more than charcter") //put here the cool alert
     return 
   }
   buttonRef.current.disabled = true;
  axios.post('/post',{content},
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
    <div className=' mt-5 bg-slate-200 p-10 rounded-3xl flex items-center shadow-md'>
    <ProfilePic gender={JSON.parse(localStorage['userInfo']).gender}/>
    <input className=' p-4 rounded-3xl  w-8/12  lg:w-10/12 m-2 text-xl' 
    value={content} 
    maxLength={100}
    minLength={2} 
    onChange={onChangeContent}
    required
    placeholder={`Write something as ${JSON.parse(localStorage['userInfo']).user}...`}
    id="" />
    <button  className=' hover:text-indigo-900 text-indigo-500' ref={buttonRef} onClick={sendpost}>< AiOutlineSend  size={50}/></button>
    </div>
  )
}
