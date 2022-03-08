import React from 'react'
import"../styles/HeadLine.css";
import webSiteLogo from "../images/logo.png";
import {NavLink} from 'react-router-dom'
import {GoHome } from   "react-icons/go";
import {BsQuestionLg } from   "react-icons/bs";
import {FaFileContract } from   "react-icons/fa";
import { useNavigate } from "react-router-dom";



export default function HeadLine() {
 const navigate=useNavigate()
/**
 * for the stylyd links
 */  
const InfoNavLink=({children,to,data})=>{
return (
    <NavLink className={'hover:text-orange-900  items-center flex space-x-1'} to={to}>
        {children}
        {data}
    </NavLink>
)
}
/**
 * log out componet
 */
const LogOut=()=>{
  const logOutHandler=(e)=>{
    localStorage.clear();
    navigate('/login')
  }
  return(
    <button className='font-bold hover:text-gray-600 ' onClick={logOutHandler}>
    {'LogOut'}
    </button>
  )
}

const LogNavLink=({children,to})=>{
  return(
      <NavLink  className={ ' hover:text-gray-600'} to={to}>
       {children}
      </NavLink>
  )
}



  return (
     <nav className={"  bg-sky-200  bg-opacity-90 "}>
       <div className={' mx-auto   px-16 items-center font-bold fontsi text-3xl flex justify-between'}>
       <div className='space-x-4 flex items-center'>  { /*general conteiner */ }
      <img src={webSiteLogo} className={"flex max-h-24"} alt={"logo"} />
      <div className='flex space-x-4  text-amber-600 '>
       <InfoNavLink  to={'/'} data={'Home'}>
       <GoHome/>
      </InfoNavLink>
       <InfoNavLink  to={'/about'} data={'About'}>
       <BsQuestionLg/>
      </InfoNavLink>
      <InfoNavLink  to={'/terms'} data={'Terms'}>
       <FaFileContract/>
      </InfoNavLink>
      </div>
       </div>
       <div className='flex  space-x-4 items-center '> { /*the login and signin div */ }
      {!localStorage.getItem("token")?(
        <>
        <LogNavLink  to={'/Login'}>
        {'Login'}
        </LogNavLink>
        <LogNavLink  className={''} to={'/Register'}>
        {'SignIn'}
        </LogNavLink>
        </>
      )
      :(<LogOut />)
      }
     </div>
    </div>
  </nav>
  )
}
