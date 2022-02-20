import React from 'react'
import"../styles/HeadLine.css";
import webSiteLogo from "../images/logo.png";

export default function HeadLine() {
  return (
    
    <div className={"headline"}>
        <img src={webSiteLogo} className={"WebLogo"} alt={"logo"} /> 
    </div>
  )
}
