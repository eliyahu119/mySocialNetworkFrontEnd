import { useState } from "react";
import boyLogo from "../images/boyLogo.png";
import girlLogo from "../images/girlLogo.png";

//shows the profile pic
//for now the photo based on gender only (only 2 pictures).
function ProfilePic({gender}) 
{
    
    return (
        <div className="imagediv">
        <img src={gender?boyLogo:girlLogo} className="imageSource" alt="profile" />
        </div>
    );
  }
  export default  ProfilePic;