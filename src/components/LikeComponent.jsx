import { useState } from "react";
import"../styles/LikeComponent.css";

//the like component
const LikeComponent=({likes})=>{
const [clicked,hasclicked]= useState(false);
const HasClicked=()=>{
    hasclicked(!clicked);
}

return (
    <button onClick={HasClicked} className={`LikeComponent ${clicked?"ClikedLike":""} `}>{"455❤"}</button>
);
}

export default LikeComponent;