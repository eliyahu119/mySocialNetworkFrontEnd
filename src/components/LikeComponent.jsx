import { useEffect, useState } from "react";
import axios  from "axios";
import"../styles/LikeComponent.css";

//the like component
const LikeComponent=({likes,ID})=>{
const [countlikes,setcountlikes]=useState(likes?.length||0)
const [clicked,setClicked]= useState(false); //TODO::  CHECK IF  USER HAS LIKED GET INFO IF THE 

useEffect(() => {

if (likes!=null){
    
    const userInfo=JSON.parse(localStorage.getItem('userInfo'))
    if (likes.includes(userInfo._id )){
        setClicked(true)
    }
}
}, [])

const HasClicked=()=>{
   
    axios.post(`http://127.0.0.1:80/${clicked?'rlike':'like'}`,{postCommentID:ID},
    {
        headers:{
            'x-access-token':localStorage.getItem('token')
         }
    }
    ).then(res=>res.data).then(frontEndclickAction())
    .catch(e=>console.log(e))
        //     data=>{
        //     localStorage.setItem("token",data.token);
        //     localStorage.setItem("userInfo",JSON.stringify(data.userInfo))
        //     navigate('/')
        // }
        //     ).catch(
        //         //TODO:: put here some kind of alert error to inform the user 
        //         (e)=>console.log(e)
        //         )
        
    
}
const frontEndclickAction=()=>{
    clicked?setcountlikes(countlikes-1):setcountlikes(countlikes+1);
    setClicked(!clicked);
}
return (
    <button onClick={HasClicked} className={`LikeComponent ${clicked?"ClikedLike":""} `}>{countlikes}</button>
);
}

export default LikeComponent;