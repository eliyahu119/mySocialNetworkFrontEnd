import { useState } from "react";
import"./LikeComponent.css";

const LikeComponent=({likes})=>{
const [clicked,hasclicked]= useState(false);
const HasClicked=()=>{
    hasclicked(!clicked);
}

return (
    <button onClick={HasClicked} className={`LikeComponent ${clicked?"ClikedLike":""} `}>{"455 ♥"}</button>
);
}

export default LikeComponent;