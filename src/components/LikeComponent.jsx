import { useState } from "react";
import"../styles/LikeComponent.css";

//the like component
const LikeComponent=({likes})=>{
const [countlikes,setcountlikes]=useState(likes?.length||0)
const [clicked,hasclicked]= useState(false);
const HasClicked=()=>{
    hasclicked(!clicked);
}

return (
    <button onClick={HasClicked} className={`LikeComponent ${clicked?"ClikedLike":""} `}>{countlikes}</button>
);
}

export default LikeComponent;