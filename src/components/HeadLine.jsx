import React from 'react'
import webSiteLogo from "../images/logo.png";
import { NavLink } from 'react-router-dom'
import { GoHome } from "react-icons/go";
import { BsQuestionLg } from "react-icons/bs";
import { FaFileContract } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const horizental= ''
/**
 *the navbar of the project
 * @returns 
 */
export default function HeadLine() {
  const navigate = useNavigate()
  /**
   * for the stylyd  Info links
   */
  const InfoNavLink = ({ children, to, data }) => {
    return (
      <NavLink className={'hover:text-orange-600  shadow-md shadow-orange-200  items-center flex space-x-1'} to={to}>
        {children}
        {data}
      </NavLink>
    )
  }
  /**
   * log out componet
   */
  const LogOut = () => {
    const logOutHandler = (e) => {
      localStorage.clear();
      navigate('/login')
    }
    return (
      <button className='font-bold hover:text-gray-600 shadow-md' onClick={logOutHandler}>
        {'LogOut'}
      </button>
    )
  }

  const LogNavLink = ({ children, to }) => {
    return (
      <NavLink className={' hover:text-gray-600 shadow-md'} to={to}>
        {children}
      </NavLink>
    )
  }



  return (
    <nav className={"  bg-pink-100 mb-20 bg-opacity-90 shadow-lg shadow-purple-50 flex  "}> {/*the navbar*/ }
    <img src={webSiteLogo} className={"max-h-24 max-w-sm inline-flex"} alt={"logo"} />
      <div className={'   bg-pink-100 w-full  items-center font-bold fontsi text-2xl flex justify-between '}>
        <div className='flex space-x-4  items-center'>  { /*general conteiner */}
          <div className='flex space-x-4  text-orange-400 '>
            <InfoNavLink to={'/'} data={'Home'}>
              <GoHome />
            </InfoNavLink>
            <InfoNavLink to={'/about'} data={'About'}>
              <BsQuestionLg />
            </InfoNavLink>
            <InfoNavLink to={'/terms'} data={'Terms'}>
              <FaFileContract />
            </InfoNavLink>
          </div>
        </div>
        <div className='flex  space-x-4 items-center '> { /*the login and signin div */}
          {!localStorage.getItem("token") ? (
            <>
              <LogNavLink to={'/Login'}>
                {'Login'}
              </LogNavLink>
              <LogNavLink className={''} to={'/Register'}>
                {'SignIn'}
              </LogNavLink>
            </>
          )
            : (<LogOut />)
          }
        </div>
      </div>
    </nav>
  )
}
